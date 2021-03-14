import styled from 'styled-components/native'
import { Typography } from '../../Typography'

export const PrimaryButtonContainer = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    background-color: #4D8AF0;
    padding-vertical: 12px;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
`

export const PrimaryButtonText = styled(Typography.H1)`
    color: #FFFFFF;
`