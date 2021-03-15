import { ImageBackground } from "react-native"
import styled from "styled-components/native"
import { Typography } from "../../components"

export const Header = styled.View``
export const HeaderDividerTextContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    z-index: 0;
`
export const HeaderDividerText = styled(Typography.Body)`
    border-width: 1px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    z-index: 10;
`

export const HeaderBackgroud = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
`

export const ButtonContainer = styled.View`
    padding-horizontal: 20px;
`