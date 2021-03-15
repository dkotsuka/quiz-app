export type QuestionScreenParams = {
    id: number
    name: string
}

export type LastAnswer = "correct" | "wrong" | "empty"
export type DifficultLevel = "easy" | "medium" | "hard"

export type Score = {
    [key in DifficultLevel]: number[]
}