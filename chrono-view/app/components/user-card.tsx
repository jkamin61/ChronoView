import React from 'react';
import Image from "next/image";
import profileImage from "../../public/image-jeremy.png"

const UserCard = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:h-auto relative md:flex-row">
            <div
                className="flex gap-1 bg-indigo-600 mt-4 rounded-2xl p-4 w-full justify-c enter items-center relative top-4 md:mt-0 md:top-0 md:relative">
                <div className="flex gap-3 justify-center items-center">
                    <div className="w-28 h-28 md:w-40 md:h-40">
                        <Image src={profileImage} alt="profile image"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-zinc-300 md:text-xl">Report for</p>
                        <h4 className="text-xl font-bold whitespace-nowrap text-zinc-300 md:text-2xl">Jeremy Robson</h4>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-950 mx-6 w-full px-8 pt-10 pb-8 rounded-b-2xl md:mx-0 md:w-1/4 md:rounded-t-2xl md:p-8 md:pl-12">
                <ul className="flex justify-between gap-6 text-indigo-300 md:flex-col md:justify-center md:text-xl">
                    <li className="hover:text-white hover:cursor-pointer hover:animate-pulse hover:motion-reduce:animate-pulse">Daily</li>
                    <li className="hover:text-white hover:cursor-pointer hover:animate-pulse hover:motion-reduce:animate-pulse">Weekly</li>
                    <li className="hover:text-white hover:cursor-pointer hover:animate-pulse hover:motion-reduce:animate-pulse">Monthly</li>
                </ul>
            </div>
        </div>
    );
};

export default UserCard;