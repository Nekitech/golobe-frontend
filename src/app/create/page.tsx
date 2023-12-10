"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@mui/base";
import {colors} from "@/styles/global_styles";
import {hotelService} from "@/services/Hotel";
import {Button} from "@mui/material";

const CreateHotel = () => {
    const {handleSubmit, register} = useForm()

    const handleCreateHotel = async (data: any) => {
        data.stars = Number(data.stars)
        data.price_per_night = Number(data.price_per_night)
        const createdHotel = await hotelService.CreateHotel({
            ...data,
            count_reviews: 0,
            rating: 0,
            freebies: "",
            url_image: ""
        })
    }

    return (
        <>
            <h1 className={"text-3xl mb-12 mt-12"}>Добавление отеля</h1>

            <form onSubmit={handleSubmit(handleCreateHotel)} className={"flex flex-col gap-y-4"}>
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
                }}>{"Создать отель"}</Button>
            </form>
        </>
    )
        ;
};

export default CreateHotel;
