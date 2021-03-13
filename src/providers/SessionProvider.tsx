import React, { createContext, useEffect, useState } from 'react'
import { sessionService } from '../services/SessionService'

interface SessionState {
    token: string
    resetToken: () => void
}

export const SessionContext = createContext({} as SessionState)

export const SessionProvider: React.FC = ({children}) => {
    const [token, setToken] = useState("")

    useEffect(() => {
        resetToken()
    }, [])

    const resetToken = async () => {
        let freshToken
        if(token.length > 0) {
            freshToken = await sessionService.resetSessionToken(token)
        } else {
            freshToken = await sessionService.getSessionToken()
        }
        setToken(freshToken)
    }

    return <SessionContext.Provider value={{ token, resetToken }}>
        {children}
    </SessionContext.Provider>
}