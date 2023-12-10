import React from 'react';
import HotelList from "@/components/hotels/HotelsList/HotelList";
import RatingFilter from "@/components/hotels/filters/RatingFilter";

const HotelListing = () => {
    return (
        <div className={"grid grid-cols-4"}>
            <div className={"col-span-1"}>
                <RatingFilter/>
            </div>
            <div className={"col-span-3"}>
                <HotelList />

            </div>
        </div>
    );
};

export default HotelListing;
