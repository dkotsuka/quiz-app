import React from 'react'
import { Image } from 'react-native'
import { Icons } from '../../../assets/icons'
import { Separator } from '../Separator'
import { Typography } from '../Typography'
import { AnswerCheckBackGround, AnswerCheckContainer } from './answer-check-modal.styles'

interface AnswerCheckModalProps {
    isVisble: boolean
    isCorrect: boolean
}

export const AnswerCheckModal: React.FC<AnswerCheckModalProps> = ({isVisble, isCorrect}) => {
    if(!isVisble) return null
    return <AnswerCheckBackGround>
        <AnswerCheckContainer style={{shadowOffset: {width: 0, height: 2}}} isCorrect={isCorrect}>
            <Image source={Icons[isCorrect ? "correct" : "wrong"]}/>
            <Separator height={14}/>
            <Typography.H1>{isCorrect ? "You're right!" : "You missed."}</Typography.H1>
        </AnswerCheckContainer>
    </AnswerCheckBackGround>
}
