import React from 'react'
import { Image } from 'react-native'
import { Icons } from '../../../assets/icons'
import { capitalize } from '../../utils/stringUtils'
import { Typography } from '../Typography'
import { DifficultBadgeContainer } from './difficult-badge.styles'

interface DifficultBadgeProps {
    level: "easy" | "medium" | "hard"
}

export const DifficultBadge: React.FC<DifficultBadgeProps> = ({level}) => {
    const levelText = capitalize(level)
    return <DifficultBadgeContainer>
        <Image source={Icons.fullStar}/>
        <Image source={level !== "easy" ? Icons.fullStar : Icons.emptyStar}/>
        <Image source={level === "hard" ? Icons.fullStar : Icons.emptyStar}/>
        <Typography.Small style={{paddingHorizontal: 6}}>{levelText}</Typography.Small>
    </DifficultBadgeContainer>
}
