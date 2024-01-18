import React from 'react';
import data from "../data/data.json";
import Image from "next/image";
import dots from "../../public/icon-ellipsis.svg";
import { bgColorSwitcher, imageSwitcher } from "./utils/cards-bg-handlers";

const Cards = () => {
    return (
        <div className="md:flex md:flex-wrap md:justify-between">
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="w-full h-12 rounded-t-2xl relative -z-10 top-8 md:w-80">
                            <div className={`flex justify-end pr-4 rounded-t-2xl ${bgColorSwitcher(item.title)} `}>
                                <Image src={imageSwitcher(item.title)} alt="Icon" width="64" height="64"/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-6 px-4 bg-indigo-950 my-4 rounded-2xl">
                            <div className="text-white">
                                <h3 className="font-bold mb-4">{item.title}</h3>
                                <p>{item.timeframes.weekly.current}</p>
                            </div>
                            <div className="text-indigo-300">
                                <div className="flex justify-end items-center mb-9">
                                    <Image className="" src={dots} alt="Click for more"/>
                                </div>
                                <p>Last week - {item.timeframes.weekly.previous}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Cards;