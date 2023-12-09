import $api from "@/api/axios";
import type {Hotel} from "@/types/Hotel"

export class HotelService {

    async getHotels() {
        return $api.get<Hotel[]>("/hotel", {
        }).then(res => res.data)
    }

    async CreateHotel(newHotel: Omit<Hotel, "id" | "freebies" | "url_image">) {
        console.log(newHotel)
        return $api.post<Hotel>("/hotel", {
            ...newHotel
        })
    }
}

export const hotelService = new HotelService()