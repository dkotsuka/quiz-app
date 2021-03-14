import React from 'react'
import styled from 'styled-components/native'
import { Typography } from '../Typography'

interface AnswerSelectorProps {
    text: string
    isSelected: boolean
    onPress: () => void
}

export const AnswerSelector: React.FC<AnswerSelectorProps> = ({text, isSelected, onPress}) => {
    return <Container isSelected={isSelected} onPress={onPress} style={{shadowOffset: {width: 0, height: 2}}}>
        <Typography.Body size={14}>{text}</Typography.Body>
    </Container>
}

const Container = styled.TouchableOpacity`
    border-color: #4D8AF0;
    border-radius: 8px;
    border-width: ${({isSelected}: {isSelected: boolean}) => isSelected ? 2 : 0}px;
    padding: ${({isSelected}: {isSelected: boolean}) => isSelected ? 17 : 19}px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    shadow-color: #000000;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 1;
`