import React from 'react'
import { Separator, Typography } from '../index'

export const ErrorPlaceHolder: React.FC = (props) => {
    return <>
        <Separator height={160}/>
        <Typography.H1 style={{color: "gray"}}>An error has occurred. Please, try again later.</Typography.H1>
    </>
}