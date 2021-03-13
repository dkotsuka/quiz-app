import styled from 'styled-components/native'

interface FontProps {
    size?: number
}

const H1 = styled.Text`
    font-size: ${({size}: FontProps) => size ? size : 20}px;
    font-family: 'Roboto Bold';
`

const H2 = styled.Text`
    font-size: ${({size}: FontProps) => size ? size : 16}px;
    font-family: 'Roboto Bold';
`

const Body = styled.Text`
    font-size: ${({size}: FontProps) => size ? size : 14}px;
    font-family: 'Roboto';
`

const Small = styled.Text`
    font-size: ${({size}: FontProps) => size ? size : 12}px;
    font-family: 'Roboto';
`

export const Typography = {
    H1, H2, Body, Small
}