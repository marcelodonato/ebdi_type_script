import { useState, useCallback, useRef, useEffect } from "react";

type UseEventBodyProps = {
    onRefresh: () => Promise<void>;
};

export const useEventBody = ({ onRefresh }: UseEventBodyProps) => {
    const [refreshing, setRefreshing] = useState(false);
    const isMounted = useRef(true); 

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            await onRefresh();
        } finally {
            if (isMounted.current) {
                setRefreshing(false);
            }
        }
    }, [onRefresh]);

    return { refreshing, handleRefresh };
};
