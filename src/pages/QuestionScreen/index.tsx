import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SessionContext } from '../../providers/SessionProvider'
import { Question, questionService } from '../../services/QuestionService'

interface QuestionScreenProps {
    categoryId: number
}

type LastAnswer = "success" | "mistake" | "empty"
type DifficultLevel = "easy" | "medium" | "hard"

export const QuestionScreen: React.FC<QuestionScreenProps> = (props) => {
    
    const {token} = useContext(SessionContext)
    const [lastAnswer, setLastAnswer] = useState<LastAnswer>()
    const [difficult, setDifficult] = useState<DifficultLevel>("medium")
    const [question, setQuestion] = useState<Question>()

    useEffect(() => {
        getNewQuestion()
    }, [])

    const getNewQuestion = async () => {
        const newQuestion = await questionService.getQuestion(props.categoryId, difficult, token)
        setQuestion(newQuestion)
    }

    const checkAnswer = (answer: string) => {
        if(question?.correct_answer == answer) {
            lastAnswer == "success" 
            ? setDifficultUp()
            : setLastAnswer("success")
        } else {
            lastAnswer == "mistake"
            ? setDifficultDown()
            : setLastAnswer("mistake")
        }
    }

    const setDifficultUp = () => {
        if(difficult == "easy") setDifficult("medium")
        if(difficult == "medium") setDifficult("hard")
        setLastAnswer("empty")
    }

    const setDifficultDown = () => {
        if(difficult == "medium") setDifficult("easy")
        if(difficult == "hard") setDifficult("medium")
        setLastAnswer("empty")
    }

    return <>
        <SafeAreaView >

        </SafeAreaView>
    </>
}