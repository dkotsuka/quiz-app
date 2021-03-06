import React from 'react'
import { LayoutContainer, Typography, Separator } from '../index'
import { DifficultLevel, Score } from '../../screens/QuestionScreen/question-screen.types'
import { capitalize } from '../../utils'

interface LevelScoreProps {
    level: DifficultLevel
    score: Score
}

export const LevelScore:React.FC<LevelScoreProps> = ({level, score}) => {
    return <LayoutContainer.Column key={level} >
        <Typography.H1 style={{fontSize: 14}}>{capitalize(level)}</Typography.H1>
        <Separator height={4}/>
        <Typography.Body style={{fontSize: 14}} testID="level-score-text-correct">Correct: {score[level][0]}</Typography.Body>
        <Typography.Body style={{fontSize: 14}} testID="level-score-text-wrong">Wrong: {score[level][1]}</Typography.Body>
    </LayoutContainer.Column>
}