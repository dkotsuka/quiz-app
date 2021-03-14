import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { Icons } from '../../../assets/icons'
import { capitalize } from '../../utils/stringUtils'
import { LayoutContainer } from '../LayoutContainer'
import { Separator } from '../Separator'
import { Typography } from '../Typography'

interface DifficultBadgeProps {
    level: "easy" | "medium" | "hard"
}

export const DifficultBadge: React.FC<DifficultBadgeProps> = ({level}) => {
    const levelText = capitalize(level)
    return <Container>
        <Image source={Icons.fullStar}/>
        <Image source={level !== "easy" ? Icons.fullStar : Icons.emptyStar}/>
        <Image source={level === "hard" ? Icons.fullStar : Icons.emptyStar}/>
        <Typography.Small style={{paddingHorizontal: 6}}>{levelText}</Typography.Small>
    </Container>
}

const Container = styled(LayoutContainer.Row)`
    height: 20px;
    padding-horizontal: 6px;
    border-radius: 10px;
    align-items: center;
    background-color: #d7d8de;
`