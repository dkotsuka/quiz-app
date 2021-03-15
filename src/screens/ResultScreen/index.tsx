import React, { useEffect } from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { Route, useNavigation, useRoute } from '@react-navigation/native'
import Dash from 'react-native-dash';
import { Score } from '../QuestionScreen/question-screen.types'
import { Button, 
    LayoutContainer, 
    PageContainer, 
    Separator, 
    Typography, 
    LevelScore, 
    Divider, 
    ResultScore } from '../../components'
import { Images } from '../../../assets/images';
import { HeaderBackgroud, 
    HeaderDividerTextContainer, 
    HeaderDividerText, 
    ButtonContainer, 
    Header } from './result-screen.styles';
import { ScreenNames } from '..';

interface ResultScreenParams {
    title: string
    score: Score
}

export const ResultScreen: React.FC = (props) => {
    const {params: {score, title}}: {params: ResultScreenParams} = useRoute<Route<'QUESTION_SCREEN', ResultScreenParams>>()
    const navigation = useNavigation()
    const WIDTH = Dimensions.get("screen").width
    const headerHeight = WIDTH / 320 * 171
    
    useEffect(() => {
        navigation.setOptions({title: title, headerLeft: null})
    }, [])

    const backToMain = () => {
        navigation.navigate(ScreenNames.MAIN_SCREEN)
    }

    return <>
        <Header style={{height: headerHeight}}>
            <HeaderBackgroud source={Images.resultHeader} resizeMode="cover" style={{paddingLeft: WIDTH*0.38}}>
                <Typography.H1 style={{fontSize: 28}}>Congratulations!</Typography.H1>
                <Typography.Body style={{fontSize: 16}}>You've finished the quiz</Typography.Body>
            </HeaderBackgroud>
        </Header>
        <Separator height={30}/>
        <Dash dashColor="#343C58" dashGap={2} dashLength={2} dashThickness={2}/>
        <HeaderDividerTextContainer>
            <HeaderDividerText>Check your performance in the quiz</HeaderDividerText>
        </HeaderDividerTextContainer>
        <PageContainer hPadding={19} vPadding={31}>
            <ResultScore successes={1} mistakes={0}/>
            <Separator height={34}/>
            <LayoutContainer.Row justifyContent="space-between" >
                <LevelScore level="easy" score={score}/>
                <Divider vertical />
                <LevelScore level="medium" score={score}/>
                <Divider vertical />
                <LevelScore level="hard" score={score}/>
            </LayoutContainer.Row>
            <Separator height={50}/>
            <ButtonContainer>
                <Button.Primary text="Back to main" onPress={backToMain}/>
            </ButtonContainer>
            <SafeAreaView />
        </PageContainer>
    </>
}

