"use client"
import React from 'react';
import {useQuery} from "react-query";
import {hotelService} from "@/services/Hotel";
import {Hotel} from "@/types/Hotel";
import HotelCard from "@/components/hotels/HotelCard/HotelCard";
import {useAppSelector} from "@/store/hooks";

const HotelList = () => {
    const {rating} = useAppSelector(state => state.hotelReducer.filter)
    const {data, refetch, isLoading} = useQuery(
        ["hotels"],
        () => hotelService.getHotels({
            rating
        },
        ))

    React.useEffect(() => {
        if (rating) {
            refetch();
        }
    }, [rating, refetch]);
    return (
        <div className={"flex flex-col gap-y-4"}>
            {
                data?.map((hotel: Hotel) => {

                    return (
                        <HotelCard key={hotel.id} hotel={hotel}/>
                    )
                })
            }
        </div>
    );
};

export default HotelList;
