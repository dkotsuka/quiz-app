import {API_CATEGORY_URL} from "@env"
import axios from 'axios'
import { QuestionAPIURLBuilder } from "./QuestionURIBuilder"

export type Category = {
    id: number
    name: string
}

export type Question = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }

class QuestionService {
    async getCategories(): Promise<Category[]> {
        let response: Category[] = []
        try {
            const {data} = await axios.get(API_CATEGORY_URL)
            if(data && data.trivia_categories) {
                response = data.trivia_categories
            }
        } catch(error) {
            console.warn(error)
        } 
        return response
    }

    async getQuestion(categoryId: number, difficult: string, token: string): Promise<Question> {
        const questionAPIURLBuilder = new QuestionAPIURLBuilder()
        let result: Question[] = []
        try {
            const url = questionAPIURLBuilder
            .setAmount(1)
            .setCategory(categoryId)
            .setDifficulty(difficult)
            .setType('multiple')
            .setToken(token)
            .build()

            console.log(url)

            const {data} = await axios.get(url)
            if(data && data.response_code == 0) {
                result = data.results
            }
        } catch (error) {
            console.warn(error)
        }
        return result[0]
    }
}

export const questionService = new QuestionService()