import { useEffect, useRef, useState } from "react";


interface UseCountdownReturn {
    remaining: number;
    isExpired: boolean;
}

export function useCountdown(expiredAt: number | null): UseCountdownReturn {
    const [remaining, setRemaining] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (!expiredAt || expiredAt <= Date.now()) {
            setRemaining(0);
            return;
        }

        const tick = () => {
            const diff = Math.ceil((expiredAt - Date.now()) / 1000);
            const value = Math.max(diff, 0);

            setRemaining(value);

            if (value === 0 && intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

        tick();
        intervalRef.current = setInterval(tick, 1000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [expiredAt]);

    return {
        remaining,
        isExpired: remaining === 0,
    };
}