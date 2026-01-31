import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const baseURL = process.env.BASE_URL || 'http://localhost:3000'

//================= Public API Instance =================//


export const publicApi = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
})

publicApi.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

//================= Private API Instance =================//

export const privateApi = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
})

privateApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

let failedQueue: Array<{
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
}> = []

let isRefreshing = false

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

privateApi.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }
        if (
            error.response?.status === 401
            && !originalRequest._retry
        ) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                }).then((token) => {
                    if (token && originalRequest.headers) {
                        originalRequest.headers['Authorization'] = `Bearer ${token}`
                    }
                    return privateApi(originalRequest)
                }).catch((error) => {
                    return Promise.reject(error)
                })
            }
            originalRequest._retry = true
            isRefreshing = true

            try {
                const result = await publicApi.post('/auth/refresh-token') as { access_token: string }
                localStorage.setItem('access_token', result.access_token)

                processQueue(null, result.access_token)

                originalRequest.headers['Authorization'] = `Bearer ${result.access_token}`
                return privateApi(originalRequest)
            } catch (error: any) {
                processQueue(error, null)

                localStorage.removeItem('access_token')

                window.location.href = '/login'
                return Promise.reject(error)
            } finally {
                isRefreshing = false
            }
        }
    }
)