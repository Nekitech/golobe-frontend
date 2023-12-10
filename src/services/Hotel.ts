import $api from "@/api/axios";
import type {Hotel} from "@/types/Hotel"

export class HotelService {

    async getHotels(filter: Partial<Hotel>) {
        return $api.get<Hotel[]>("/hotel", {
            headers: { "Content-Type": "application/json" },
            params: filter,
        }).then(res => res.data)
    }

    async CreateHotel(newHotel: Omit<Hotel, "id" | "freebies" | "url_image">) {
        console.log(newHotel)
        return $api.post<Hotel>("/hotel", newHotel)
    }

    async getHotelById(id: number) {
        return $api.get<any>(`/hotel/${id}`).then(res => res.data)
    }

    async updateHotelInfo(hotelInfo: Partial<Hotel>) {
        const {id, ...info} = hotelInfo
        return $api.patch(`/hotel/${id}`, info)
    }
}

export const hotelService = new HotelService()