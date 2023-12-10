import React from 'react';
import Image from "next/image";
import {Button} from "@mui/material";
import HeartIcon from "@/components/UI/Heart/Heart";
import {colors} from "@/styles/global_styles";
import {Hotel} from "@/types/Hotel";
import EditIcon from '@mui/icons-material/Edit';
import {useRouter} from "next/navigation";

interface PropsHotelCard {
    hotel: Hotel

}

const HotelCard = ({hotel}: PropsHotelCard) => {
    const {name, rating, price_per_night, address} = hotel;
    const nav = useRouter()

    const handleNavHotelInfo = () => {
        nav.push(`/hotels/${hotel.id}`)
    }

    return (
        <div className={"w-210 h-auto p-px-6 flex gap-x-4 p-4"} style={{
            boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"
        }}>
            <Image src={"/assets/default.png"} alt={"img"} width={300} height={25}/>
            <div className={"w-full flex flex-col justify-between h-auto gap-x-2"}>
                <div className={"w-full flex justify-between"}>
                    <div className={"flex-col"}>
                        <h3 style={{
                            fontFamily: "TradeGothic LT Extended",
                            fontSize: 30,
                            fontStyle: "normal",
                            fontWeight: 700,
                        }}>{name}</h3>
                        <p>{address}</p>
                        <div className={"rounded-md"} style={{
                            borderColor: colors.primary
                        }}>
                            {rating}
                        </div>
                    </div>
                    <div style={{
                        color: colors.price,
                        fontSize: 24,
                        fontWeight: 700,
                    }}>
                        {
                            price_per_night && `${price_per_night} / night`
                        }
                    </div>
                    <Button onClick={() => {
                        nav.push(`/update/${hotel.id}`)
                    }}>
                        <EditIcon style={{
                            color: "#000"
                        }}/>
                    </Button>
                </div>
                <div className={"flex gap-x-4"}>
                    <Button className={"rounded-md"} style={{
                        border: `1px solid ${colors.primary}`
                    }}>
                        <HeartIcon/>
                    </Button>
                    <Button onClick={handleNavHotelInfo} style={{
                        width: 300,
                        backgroundColor: colors.primary,
                        color: "#fff"
                    }} className={"w-full"}>View Place</Button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
