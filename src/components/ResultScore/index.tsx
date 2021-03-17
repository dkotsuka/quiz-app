import React from 'react'
import { DifficultLevel, Score } from '../../screens/QuestionScreen/question-screen.types'
import { LayoutContainer } from '../LayoutContainer'
import { Typography } from '../Typography'
import { ResultScoreContainer } from './result-score.styles'

interface ResultScoreProps {
    score: Score
}

export const ResultScore: React.FC<ResultScoreProps> = ({score}) => {
    const levels: DifficultLevel[] = Object.keys(score) as DifficultLevel[]
    let successes = 0
    let mistakes = 0
    levels.forEach(key => {
        successes += score[key][0]
        mistakes += score[key][1]
    })

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

