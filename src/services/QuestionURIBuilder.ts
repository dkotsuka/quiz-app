import {API_URL} from "@env"

export class QuestionAPIURLBuilder {
    private query: string

    constructor() {
        this.query = ""
    }

    setAmount(amount: number) {
        if(amount) {
            this.addConnector()
            this.query += `amount=${amount}`
        }
        return this
    }

    setCategory(category: number) {
        if(category) {
            this.addConnector()
            this.query += `category=${category}`
        }
        return this
    }

    setDifficulty(difficulty: string) {
        if(difficulty) {
            this.addConnector()
            this.query += `difficulty=${difficulty}`
        }
        return this
    }

    setType(type: string) {
        if(type) {
            this.addConnector()
            this.query += `type=${type}`
        }
        return this
    }

    setToken(token: string) {
        if(token) {
            this.addConnector()
            this.query += `token=${token}`
        }
        return this
    }

    private addConnector() {
        if(this.query.length > 0) this.query += "&"
    }
    
    build() {
        return `${API_URL}${this.query}`
    }
}