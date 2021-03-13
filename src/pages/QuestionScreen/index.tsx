import { Route, useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SessionContext } from '../../providers/SessionProvider'
import { Question, questionService } from '../../services/QuestionService'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '..'

type QuestionScreenParams = {
    id: number
    name: string
}

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList, 'QUESTION_SCREEN'
>

type QuestionScreenProps = {
  navigation: ProfileScreenNavigationProp;
}


type LastAnswer = "success" | "mistake" | "empty"
type DifficultLevel = "easy" | "medium" | "hard"

export const QuestionScreen: React.FC<QuestionScreenProps> = (props) => {
    const {params}: {params: QuestionScreenParams} = useRoute<Route<'QUESTION_SCREEN', QuestionScreenParams>>()
    const {token} = useContext(SessionContext)
    const navigation = useNavigation()
    
    const [difficult, setDifficult] = useState<DifficultLevel>("medium")
    const [lastAnswer, setLastAnswer] = useState<LastAnswer>("empty")
    const [question, setQuestion] = useState<Question>()

    useEffect(() => {
        getNewQuestion()
        navigation.setOptions({title: params?.name})
    }, [])

    const getNewQuestion = async () => {
        const newQuestion = await questionService.getQuestion(params.id, difficult, token)
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

    console.log(question)

    return <>
        <SafeAreaView >

        </SafeAreaView>
    </>
}