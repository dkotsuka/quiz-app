import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

export const LoadingIndicator: React.FC = (props) => {
    return <Container>
        <ActivityIndicator size="large" color="#565656"/>
    </Container>
}

const Container = styled.View`
    height: 400px;
    justify-content: center;
    align-items: center;
`