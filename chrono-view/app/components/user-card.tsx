import React from 'react';
import Image from "next/image";
import profileImage from "../../public/image-jeremy.png"

const UserCard = () => {
    return (
        <div>
            <div className="flex gap-1 bg-indigo-600 mx-6 my-4 rounded-2xl p-4">
                <div className="flex gap-3 justify-center items-center">
                    <div className="w-28 h-28">
                        <Image src={profileImage} alt="profile image"/>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <p className="text-lg text-zinc-300">Report for</p>
                        <h4 className="text-xl font-bold whitespace-nowrap text-zinc-300">Jeremy Robson</h4>
                    </div>
                </div>
            </div>
            <div className="bg-dark-ocean">
                <ul>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
        </div>
    );
};

export default UserCard;