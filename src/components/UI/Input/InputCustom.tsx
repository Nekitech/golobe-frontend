import React from 'react';
import {Input} from "@mui/material";
import {colors} from "@/styles/global_styles";

const InputCustom = (props: any) => {
    return (
        <Input {...props}  style={{
            borderColor: colors.primary,
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            maxWidth: 500,
            width: 300,
            outline: "none"
        }}/>
    );
};

export default InputCustom;
