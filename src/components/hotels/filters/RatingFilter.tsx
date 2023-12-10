"use client"
import React, {useCallback, useState} from 'react';
import {Button} from "@mui/material";
import {colors} from "@/styles/global_styles";
import {useAppDispatch} from "@/store/hooks";
import {setFilter} from "@/store/features/Hotel.slice";

const RatingFilter = () => {
    const dispatch = useAppDispatch();

    const [selectedRating, setSelectedRating] = useState<number | undefined>(undefined);

    const ratingList = [
        { name: "0+", value: 0 },
        { name: "1+", value: 1 },
        { name: "2+", value: 2 },
        { name: "3+", value: 3 },
        { name: "4+", value: 4 },
    ];

    const handleSelectRating = useCallback(
        (rate: { name: string; value: number }) => {
            setSelectedRating(prevRating => {
                const newRating =  rate.value;

                setTimeout(() => {
                    dispatch(
                        setFilter({
                            filter: {
                                rating: newRating,
                            },
                        })
                    );
                }, 0);

                return newRating;
            });
        },
        [dispatch]
    );
    return (
        <div className={"flex gap-2 flex-wrap"}>
            {
                ratingList.map((rate, ix) => {
                    return (
                        <Button key={rate.value + ix} className={"rounded-md"} style={{
                            border: `1px solid ${colors.primary}`,
                            ...(rate.value === selectedRating) ? {
                                backgroundColor: `${colors.primary}`,
                                color: "#fff"
                            } : {
                                backgroundColor: "#fff",
                                color: "#000"

                            }
                        }} onClick={() => handleSelectRating(rate)}>
                            {rate?.name}
                        </Button>
                    )
                })
            }
        </div>
    );
};

export default RatingFilter;
