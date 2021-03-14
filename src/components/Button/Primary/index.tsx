import React from 'react'
import { Image } from 'react-native'
import { Icons } from '../../../../assets/icons'
import { PrimaryButtonContainer, PrimaryButtonText } from './primary-button.styles'

interface PrimaryButton {
    onPress: () => void
    text: string
    icon?: "arrowRight"
}

export const Primary: React.FC<PrimaryButton> = ({text, icon, onPress}) => {
    return <PrimaryButtonContainer onPress={onPress}>
        <PrimaryButtonText>{text}</PrimaryButtonText>
        {!!icon && <Image source={Icons[icon]} style={{marginLeft: 12}}/>}
    </PrimaryButtonContainer>
}

