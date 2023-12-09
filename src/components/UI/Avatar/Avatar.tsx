import React from 'react';
import Image from "next/image";

const Avatar = () => {
    return (
        <div className={"flex gap-x-2 items-center"}>
            <Image src={"/assets/ava.png"} alt={"avatar"} width={45} height={45}/>
            <h3>{"John D."}</h3>
        </div>
    );
};

export default Avatar;
