interface Nav {
    url: string
    isActive: boolean
    title: string
}

export const nav : Nav[] = [
    // {
    //     url: "/",
    //     isActive: false,
    //     title: "Find Flight"
    // },
    {
        url: "/hotel_listing",
        isActive: false,
        title: "Find Stays"

    },
    {
        url: "/create",
        isActive: false,
        title: "Create Hotel"

    },
]