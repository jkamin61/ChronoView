import React from 'react';
import data from "../data/data.json";

const Card = () => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index}
                         className="flex justify-between items-center py-6 px-4 bg-indigo-800 my-4 rounded-2xl">
                        <div className="text-white">
                            <h3 className="font-bold mb-4">{item.title}</h3>
                            <p>{item.timeframes.weekly.current}</p>
                        </div>
                        <div className="text-indigo-300">
                            <p className="flex justify-end items-center text-2xl font-bold mb-4">...</p>
                            <p>Last week - {item.timeframes.weekly.previous}</p>
                        </div>
                    </div>

                )
            })}
        </>
    );
};

export default Card;