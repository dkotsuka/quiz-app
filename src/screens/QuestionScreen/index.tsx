import { Route, useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SessionContext } from '../../providers/SessionProvider'
import { Question, questionService } from '../../services/QuestionService'
import { StackNavigationProp } from '@react-navigation/stack';
import { Typography } from '../../components/Typography'
import { PageContainer } from '../../components/PageContainer'
import { Separator } from '../../components/Separator'
import { DifficultBadge } from '../../components/DifficultBadge'
import { LayoutContainer } from '../../components/LayoutContainer'
import { shuffleArray, decodeHTMLEntities } from '../../utils'
import { AnswerSelector } from '../../components/AnswerSelector'

type QuestionScreenParams = {
    id: number
    name: string
}


type LastAnswer = "success" | "mistake" | "empty"
type DifficultLevel = "easy" | "medium" | "hard"

export const QuestionScreen: React.FC = (props) => {
    const {params}: {params: QuestionScreenParams} = useRoute<Route<'QUESTION_SCREEN', QuestionScreenParams>>()
    const {token} = useContext(SessionContext)
    const navigation = useNavigation()
    
    const [difficult, setDifficult] = useState<DifficultLevel>("medium")
    const [lastAnswer, setLastAnswer] = useState<LastAnswer>("empty")
    const [question, setQuestion] = useState<Question>()
    const [questionNumber, setQuestionNumber] = useState<number>(1)
    const [answers, setAnwers] = useState<string[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState<string>()

    useEffect(() => {
        getQuestion()
        navigation.setOptions({title: params?.name})
    }, [])

    const getQuestion = async () => {
        const newQuestion = await questionService.getQuestion(params.id, difficult, token)
        setQuestion(newQuestion)
        const answers = shuffleArray([newQuestion.correct_answer, ...newQuestion.incorrect_answers])
        setAnwers(answers)
    }

    const getNewQuestion = async () => {
        setQuestionNumber(questionNumber + 1)
        getQuestion()
    }

    const goToResults = async () => {
        
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
        questionNumber < 10 ? getNewQuestion() : goToResults()
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
        <PageContainer vPadding={24} hPadding={16}>
            {question && <>
                <LayoutContainer.Row justifyContent="space-between">
                    <Typography.H2>Question {questionNumber}</Typography.H2>
                    <DifficultBadge level={"medium"}/>
                </LayoutContainer.Row>
                <Separator height={27}/>
                <Typography.Body>{decodeHTMLEntities(question.question)}</Typography.Body>
                <Separator height={32}/>
                    {answers.map((answer, index) => 
                        <AnswerSelector 
                            key={answer + index} 
                            text={decodeHTMLEntities(answer)} 
                            isSelected={selectedAnswer == answer} 
                            onPress={() => setSelectedAnswer(answer)}/>
                    )}
            </>}
            <SafeAreaView />
        </PageContainer>
    </>
}