import {API_TOKEN_URL} from "@env"
import axios from 'axios'

class SessionService {
    async getSessionToken(): Promise<string> {
        try {
            const {data} = await axios.get(`${API_TOKEN_URL}command=request`)
            if(data && data.response_code == 0) {
                return data.token
            }
        } catch (error) {
            console.warn(error)
        }
        return ""
    }

    async resetSessionToken(token: string): Promise<string> {
        try {
            const {data} = await axios.get(`${API_TOKEN_URL}command=reset&token=${token}`)
            if(data && data.response_code == 0) {
                return data.token
            }
        } catch (error) {
            console.warn(error)
        }
        return ""
    }
}

export const sessionService = new SessionService()