import { Route, useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SessionContext } from '../../providers/SessionProvider'
import { Question, questionService } from '../../services/QuestionService'
import { Typography, 
    PageContainer, 
    Separator, 
    DifficultBadge, 
    LayoutContainer, 
    AnswerSelector, 
    BottomSheet,
    Button} from '../../components'
import { shuffleArray, decodeHTMLEntities } from '../../utils'
import { AnswerCheckModal } from '../../components/AnswerCheckModal'
import { QuestionScreenParams, DifficultLevel, LastAnswer, Score } from './question-screen.types'
import { ScreenNames } from '..'

export const QuestionScreen: React.FC = (props) => {
    const MAX_QUESTIONS = 10

    const {params}: {params: QuestionScreenParams} = useRoute<Route<'QUESTION_SCREEN', QuestionScreenParams>>()
    const {token} = useContext(SessionContext)
    const navigation = useNavigation()
    
    const [difficult, setDifficult] = useState<DifficultLevel>("medium")
    const [lastAnswer, setLastAnswer] = useState<LastAnswer>("empty")
    const [question, setQuestion] = useState<Question>()
    const [questionNumber, setQuestionNumber] = useState<number>(1)
    const [answers, setAnwers] = useState<string[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState<string>()
    const [modalIsVisible, showModal] = useState(false)
    const [score, setScore] = useState<Score>({
        easy: [0,0],
        medium: [0,0],
        hard: [0,0]
    })

    useEffect(() => {
        getQuestion()
        navigation.setOptions({title: params.name, headerLeft: null})
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

    const updateScore = (answerIsCorrect: boolean) => {
        setScore({
            ...score,
            [difficult]: [
                answerIsCorrect ? score[difficult][0] + 1 : score[difficult][0],
                answerIsCorrect ? score[difficult][1] : score[difficult][1] + 1
            ]
        })
    }

    const checkAnswer = () => {
        const answerIsCorrect = question?.correct_answer == selectedAnswer
        if(answerIsCorrect) {
            lastAnswer == "correct" 
            ? setDifficultUp()
            : setLastAnswer("correct")
        } else {
            lastAnswer == "wrong"
            ? setDifficultDown()
            : setLastAnswer("wrong")
        }
        updateScore(answerIsCorrect)
        setSelectedAnswer(undefined)
        showModal(true)
    }

    const goToNext = () => {
        console.log(score)
        showModal(false)
        if(questionNumber < MAX_QUESTIONS) {
            setQuestion(undefined)
            return getNewQuestion()
        }
        navigation.navigate(ScreenNames.RESULT_SCREEN, {title: params.name, score})
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
                    <DifficultBadge level={difficult}/>
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
        <AnswerCheckModal isVisble={modalIsVisible} isCorrect={lastAnswer == "correct"}/>
        <BottomSheet isVisble={!!selectedAnswer }>
            <Button.Primary 
                text={"Answer"} 
                onPress={() => checkAnswer()} />
        </BottomSheet>
        <BottomSheet isVisble={modalIsVisible}>
            <Button.Primary 
                text={questionNumber < MAX_QUESTIONS ? "Next" : "Results"} 
                onPress={() => goToNext()} icon="arrowRight"/>
        </BottomSheet>
    </>
}