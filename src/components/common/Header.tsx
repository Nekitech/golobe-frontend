"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/UI/Avatar/Avatar";
import HeartIcon from "@/components/UI/Heart/Heart";
import {nav} from "@/config/nav";
import {useRouter} from "next/router";

const Header = ({router}: any) => {

    return (
        <div className={"w-full pt-5 pb-5 "} style={{
            background: "var(--Neutrals, #FFF)",
            boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"
        }}>
            <div className={"container mx-auto "}>
                <div className={"flex justify-between items-center"}>
                    <nav className={"flex gap-x-4"}>
                        {
                            nav.map((nav, ix) => {

                                return (
                                    <div key={nav.title + ix} className={"flex flex-col justify-between h-10"}>

                                        <Link href={nav.url} title={nav.title}>
                                            {nav.title}
                                        </Link>

                                    </div>
                                )
                            })
                        }

                    </nav>
                    <Link href={"/"}>
                        <Image src={"/assets/common/Logo.svg"} alt={"logo"} width={110} height={40}/>
                    </Link>
                    <div className={"flex items-center gap-x-6"}>
                        <div className={"flex gap-x-2"}>
                            <HeartIcon/>
                            <Link href={"/"} className={"font-bold"}>
                                Favourites
                            </Link>
                        </div>
                        <div className={"h-5 w-1 bg-black"}></div>
                        <Avatar/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;
