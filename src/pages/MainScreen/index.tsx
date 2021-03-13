import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SessionContext } from '../../providers/SessionProvider'
import { Category, questionService } from '../../services/QuestionService'

interface MainScreenProps {

}

export const MainScreen: React.FC<MainScreenProps> = (props) => {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        fetchCategories
    }, [])
    
    const fetchCategories = async () => {
        const categories: Category[] = await questionService.getCategories()
        setCategories(categories)
    }

    return <>
        <SafeAreaView >

        </SafeAreaView>
    </>
}