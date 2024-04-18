import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css";

const Covid = () => {
    const [data, setData] = useState({});
    const [search, setSearch] = useState('');

    const getCovidData = async () => {
        try {
            const response = await axios.get("https://data.covid19india.org/data.json");
            const responseData = response.data;
            const stateData = responseData.statewise.find((state) => state.state.toLowerCase() === search.toLowerCase());
            setData(stateData ? stateData : {});
            console.log(stateData)
        } catch (error) {
            console.log("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        getCovidData();
    }, [search]);

    return (
        <div className="bg-black bg-opacity-90 p-10 pt-5 text-center overflow-y-scroll overflow-x-hidden h-screen lg:overflow-hidden xl:overflow-hidden">
            <h1 className='text-white text-2xl font-bold font-serif tracking-wide animate-pulse'>🔴 LIVE</h1>
            <h2 className='text-white text-2xl font-bold font-serif tracking-wide mt-3 animate-pulse'>COVID 19 INFORMATION TRACKER</h2>

            <div className="flex justify-center mt-6">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-15 border rounded-3xl border-gray-300">
                    <input
                        type="text"
                        placeholder="Enter the State"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-transparent border-0 border-gray-300 focus:outline-none text-white text-lg py-2 pl-8 font-serif"
                    />
                </div>
            </div>

            <div className='flex flex-wrap justify-center mt-6'>
                <div className='card bg-orange-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>CURRENT</span>STATE</p>
                        <p className='text-4xl mt-5 text-white font-extrabold font-serif tracking-wide text-shadow'>{search}</p>
                    </div>
                </div>
                <div className='card bg-blue-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>TOTAL</span>RECOVERED</p>
                        <p className='text-4xl mt-5 text-white font-extrabold font-serif tracking-wide text-shadow'>{data?.recovered}</p>
                    </div>
                </div>
                <div className='card bg-green-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>TOTAL</span>CONFIRMED</p>
                        <p className='text-4xl mt-5 text-white font-extrabold font-serif tracking-wide text-shadow'>{data?.confirmed}</p>
                    </div>
                </div>
                <div className='card bg-indigo-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>TOTAL</span>DEATHS</p>
                        <p className='text-4xl mt-5 text-white font-extrabold font-serif tracking-wide text-shadow'>{data?.deaths}</p>
                    </div>
                </div>
                <div className='card bg-red-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>TOTAL</span>ACTIVE</p>
                        <p className='text-4xl mt-5 text-white font-extrabold font-serif tracking-wide text-shadow'>{data?.active}</p>
                    </div>
                </div>
                <div className='card bg-purple-500 h-44 w-full md:w-80 md:my-3 border border-black my-2 md:mx-5 transition-transform duration-300 ease-in hover:transform hover:scale-110'>
                    <div className='mt-4'>
                        <p className='text-xl mr-5 text-white font-extrabold font-sans tracking-wider'><span className='text-xs mr-1 text-white font-extrabold font-sans tracking-wider'>LAST</span>UPDATED</p>
                        <p className='text-4xl mt-2 text-white font-extrabold font-sans tracking-wide text-shadow'>{data?.lastupdatedtime}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Covid;
