import React from 'react'
import { Typography } from '../Typography'
import { AnswerSelectorContainer } from './answer-selector.styles'

interface AnswerSelectorProps {
    text: string
    isSelected: boolean
    onPress: () => void
}

export const AnswerSelector: React.FC<AnswerSelectorProps> = ({text, isSelected, onPress}) => {
    return (
        <AnswerSelectorContainer 
            testID="answer-selector-touchable"
            isSelected={isSelected} 
            onPress={onPress} 
            style={{shadowOffset: {width: 0, height: 2}}}>
            <Typography.Body size={14}>{text}</Typography.Body>
        </AnswerSelectorContainer>
    )
}
