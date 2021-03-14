import React from 'react'
import { SecondaryButtonContainer, SecondaryButtonText } from './secondary-button.styles'

interface SecondaryButton {
    onPress: () => void
    text: string
}

export const Secondary: React.FC<SecondaryButton> = (props) => {
    return <SecondaryButtonContainer onPress={props.onPress}>
        <SecondaryButtonText>{props.text}</SecondaryButtonText>
    </SecondaryButtonContainer>
}

