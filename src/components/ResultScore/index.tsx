import React from 'react'
import { LayoutContainer } from '../LayoutContainer'
import styled from 'styled-components/native'
import { Typography } from '../Typography'

interface ResultScoreProps {
    successes: number
    mistakes: number
}

export const ResultScore: React.FC<ResultScoreProps> = ({successes, mistakes}) => {
    return <ResultScoreContainer>
        <LayoutContainer.Column alignItems="center">
            <Typography.H1 style={{fontSize: 28}}>{successes}</Typography.H1>
            <Typography.Body style={{fontSize: 13}}>Successes</Typography.Body>
        </LayoutContainer.Column>
        <LayoutContainer.Column alignItems="center">
            <Typography.H1 style={{fontSize: 28}}>{mistakes}</Typography.H1>
            <Typography.Body style={{fontSize: 13}}>Mistakes</Typography.Body>
        </LayoutContainer.Column>
    </ResultScoreContainer>
}

const ResultScoreContainer = styled(LayoutContainer.Row)`
    background-color: #EFEFF2;
    justify-content: space-around;
    margin-horizontal: 60px;
    padding: 10px;
    border-radius: 10px;
`