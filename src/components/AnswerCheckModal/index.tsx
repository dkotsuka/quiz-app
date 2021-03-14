import React from 'react'
import styled from 'styled-components/native'

interface AnswerCheckModalProps {
    isVisble: boolean
    isCorrect: boolean
}

export const AnswerCheckModal: React.FC<AnswerCheckModalProps> = (props) => {
    return <Container>
        {props.children}
    </Container>
}

export const Container = styled.View`
    background-color: rgba(255,255,255,0.7);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`