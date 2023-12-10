"use client"
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import {useMutation, useQuery} from "react-query";
import {hotelService} from "@/services/Hotel";
import {Input} from "@mui/base";
import {colors} from "@/styles/global_styles";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {Hotel} from "@/types/Hotel";

const UpdateHotel = ({params}: any) => {
    const navigation = useRouter()
    const {data, isLoading} = useQuery(["hotel"], () => hotelService.getHotelById(Number(params.id)))
    const {handleSubmit, register, reset} = useForm({
        defaultValues: data
    })

    const {mutate} = useMutation((data: Partial<Hotel>) => {
        return  hotelService.updateHotelInfo(data)
    })

    useEffect(() => {
        reset(data);
    }, [data]);

    const handleUpdateHotel = async (data: any) => {
        data.stars = Number(data.stars)
        data.price_per_night = Number(data.price_per_night)
        mutate(data)
        navigation.back()
        console.log(data)
    }
    if(isLoading) return <p>Loading</p>

    return (
        <form onSubmit={handleSubmit(handleUpdateHotel)} className={"flex flex-col gap-y-4"}>
            <Input  {...register("name")} style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                maxWidth: 500,
                width: 300,
                outline: "none"
            }} placeholder={"Название"}/>

            <Input  {...register("address")} style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                maxWidth: 500,
                width: 300,
                outline: "none"
            }} placeholder={"Адрес"}/>

            <Input type={"number"}  {...register("stars", {
                valueAsNumber: true,
            })} style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                maxWidth: 500,
                width: 300,
                outline: "none"
            }} placeholder={"Кол-во звезд"}/>

            <Input type={"number"}  {...register("price_per_night", {
                valueAsNumber: true
            })} style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                maxWidth: 500,
                width: 300,
                outline: "none"
            }} placeholder={"Цена за ночь"}/>

            <Input type={"text"}  {...register("amenities")} style={{
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                maxWidth: 500,
                width: 300,
                outline: "none"
            }} placeholder={"Преимущество"}/>

            <Button type={"submit"} style={{
                backgroundColor: colors.primary,
                color: "#fff",
                width: 300
            }}>{"Обновить отель"}</Button>
        </form>
    );
};

export default UpdateHotel;
