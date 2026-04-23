import React, { useEffect, useState } from 'react'
import HeroSection from '../../Components/Banner/HeroSection'
import { TrendingApps } from '../../Apps/TrendingApps'

const Home = () => {
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
        <div>
            <HeroSection />
            <TrendingApps data={data} />
        </div>
    )
}

export default Home