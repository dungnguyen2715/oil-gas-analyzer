import { Request, Response, NextFunction, RequestHandler } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrapRequestHandler = <P>(func: RequestHandler<P, any, any, any>) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
