import {useState, useEffect, useCallback} from "react";

export const useFetch = (url) => {

    const [tourData, setTourData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async() => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTourData(data);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }, [url]);

    const deleteTour = (id) => {
        const updatedTourData = tourData.filter((tour) => tour.id !== id)
        setTourData(updatedTourData)
    }

    useEffect(() => {
        getData();
    }, [url, getData]);

    return { tourData, loading, deleteTour };
}