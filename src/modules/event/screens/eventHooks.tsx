import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchHomeData } from "../../../store/homeSotre";
import { useState } from "react";

const useEvent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.home);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (!data) {
            dispatch(fetchHomeData());
        }
    }, [dispatch, data]);

    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(fetchHomeData());
        setRefreshing(false);
    };

    return {
        data,
        loading,
        error,
        refreshing,
        setRefreshing,
        onRefresh,
    };
}

export default useEvent;