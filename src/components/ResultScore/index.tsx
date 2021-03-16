import React from 'react'
import { LayoutContainer } from '../LayoutContainer'
import { Typography } from '../Typography'
import { ResultScoreContainer } from './result-score.styles'

interface ResultScoreProps {
    successes: number
    mistakes: number
}

export const ResultScore: React.FC<ResultScoreProps> = ({successes, mistakes}) => {
    return <ResultScoreContainer>
        <LayoutContainer.Column alignItems="center">
            <Typography.H1 style={{fontSize: 28}} testID="result-score-successes-text">{successes}</Typography.H1>
            <Typography.Body style={{fontSize: 13}}>Successes</Typography.Body>
        </LayoutContainer.Column>
        <LayoutContainer.Column alignItems="center">
            <Typography.H1 style={{fontSize: 28}} testID="result-score-mistakes-text">{mistakes}</Typography.H1>
            <Typography.Body style={{fontSize: 13}}>Mistakes</Typography.Body>
        </LayoutContainer.Column>
    </ResultScoreContainer>
}

