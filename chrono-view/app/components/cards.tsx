import React from 'react';
import data from "../data/data.json";
import Image from "next/image";
import dots from "../../public/icon-ellipsis.svg";
import exercise from "../../public/icon-exercise.svg";
import play from "../../public/icon-play.svg";
import selfCare from "../../public/icon-self-care.svg";
import social from "../../public/icon-social.svg";
import study from "../../public/icon-study.svg";
import work from "../../public/icon-work.svg";

const Cards = () => {
    function imageSwitcher(title: string) {
        switch (title) {
            case "Work":
                return work;
            case "Play":
                return play;
            case "Study":
                return study;
            case "Exercise":
                return exercise;
            case "Social":
                return social;
            case "Self Care":
                return selfCare;
            default:
                return work;
        }
    }

    function bgColorSwitcher(title: string) {
        switch (title) {
            case "Work":
                return "bg-red-600";
            case "Play":
                return "bg-blue-600";
            case "Study":
                return "bg-yellow-600";
            case "Exercise":
                return "bg-green-600";
            case "Social":
                return "bg-purple-600";
            case "Self Care":
                return "bg-indigo-600";
            default:
                return "bg-red-600";
        }
    }

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="w-full h-12 rounded-t-2xl relative -z-10 top-8">
                            <div className={`flex justify-end pr-4 rounded-t-2xl ${bgColorSwitcher(item.title)}`}>
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
        </>
    )
}


export default Cards;