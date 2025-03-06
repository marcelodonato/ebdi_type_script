import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchHomeData } from "../../../store/homeSotre";

const useHome = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.home);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

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
};

export default useHome;
