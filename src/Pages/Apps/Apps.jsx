import React, { useEffect, useState } from 'react'
import { AllApps } from '../../Apps/AllApps'

export const Apps = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "appData.json";

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
                setLoading(false);
            });
    }, []);
    if (loading) return <div>Loading...</div>;
    return (
        <>
            <AllApps key={data.id} data={data} />
        </>
    )
}
