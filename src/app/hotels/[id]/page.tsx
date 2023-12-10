"use client"
import React from 'react';
import {useQuery} from "react-query";
import {hotelService} from "@/services/Hotel";

const HotelInfo = ({params}: any) => {
    const {id} = params;
    const {data} = useQuery(["hotel"], () => hotelService.getHotelById(Number(id)))
    return (
        <div>
            {JSON.stringify(data, null, 4)}
        </div>
    );
};

export default HotelInfo;
