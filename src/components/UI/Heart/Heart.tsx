import React from 'react';
import Image from "next/image";

const HeartIcon = () => {
    return (
        <Image src={"/assets/common/heart.svg"} alt={"favourite"} width={24} height={24}/>
    );
};

export default HeartIcon;
