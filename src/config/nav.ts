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
        url: "/hotels",
        isActive: false,
        title: "Find Stays"

    },
    {
        url: "/create",
        isActive: false,
        title: "Add New Hotel"

    },
]