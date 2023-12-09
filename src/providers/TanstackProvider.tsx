"use client"

import React, {useState} from 'react';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "react-query";


const TanstackProvider = ({children}: {
    children: React.ReactNode
}) => {
    const [client] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={client}>
            {children}
            {/*<ReactQueryDevtools initialIsOpen={false}/>*/}

        </QueryClientProvider>
    );
};

export default TanstackProvider;
