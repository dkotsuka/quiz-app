import {API_URL} from "@env"

export class QuestionAPIURLBuilder {
    private url: string

    constructor() {
        this.url = API_URL
    }

    setAmount(amount: number) {
        if(amount) {
            this.addConnector()
            this.url += `amount=${amount}`
        }
        return this
    }

    setCategory(category: number) {
        if(category) {
            this.addConnector()
            this.url += `category=${category}`
        }
        return this
    }

    setDifficulty(difficulty: string) {
        if(difficulty) {
            this.addConnector()
            this.url += `difficulty=${difficulty}`
        }
        return this
    }

    setType(type: string) {
        if(type) {
            this.addConnector()
            this.url += `type=${type}`
        }
        return this
    }

    setToken(token: string) {
        if(token) {
            this.addConnector()
            this.url += `category=${token}`
        }
        return this
    }

    private addConnector() {
        if(this.url.length > 0) this.url += "&"
    }
    
    build() {
        return this.url
    }
}