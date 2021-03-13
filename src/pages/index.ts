export * from './MainScreen'
export * from './QuestionScreen'
export * from './ResultScreen'

export const ScreenNames = {
    MAIN_SCREEN: "MAIN_SCREEN",
    QUESTION_SCREEN: "QUESTION_SCREEN",
    RESULT_SCREEN: "RESULT_SCREEN",
}

export type RootStackParamList = {
    QUESTION_SCREEN: { name: string, id: number };
};