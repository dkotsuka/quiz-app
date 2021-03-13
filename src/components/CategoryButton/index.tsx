import React from 'react'
import styled from 'styled-components/native'
import { Typography } from '../Typography'

interface CategoryButton {
    onPress: () => void
    text: string
}

export const CategoryButton: React.FC<CategoryButton> = (props) => {
    return <CategoryButtonContainer onPress={props.onPress}>
        <CategoryButtonText>{props.text}</CategoryButtonText>
    </CategoryButtonContainer>
}

const CategoryButtonContainer = styled.TouchableOpacity`
    border-color: #78809A;
    border-width: 1px;
    border-radius: 10px;
    height: 44px;
    justify-content: center;
    align-items: center;
`

const CategoryButtonText = styled(Typography.H2)`
    color: #78809A;
`