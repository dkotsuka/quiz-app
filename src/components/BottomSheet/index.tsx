import React, { useEffect, useState } from 'react'
import { Animated, SafeAreaView } from 'react-native'
import { BottomSheetContainer } from './bottom-sheet.styles'

interface BottomSheetProps {
    isVisble: boolean
}

export const BottomSheet: React.FC<BottomSheetProps> = ({isVisble, children}) => {
    const [animValue] = useState(new Animated.Value(-150))

    useEffect(() => {
        animate()
    }, [isVisble])

    const animate = () => {
        Animated.timing(animValue, {
            toValue: isVisble ? 0 : -150,
            duration: 250,
            useNativeDriver: false,
        }).start(() => {

        });
    };
    
    return <BottomSheetContainer style={{ bottom: animValue}}>
        {children}
        <SafeAreaView />
    </BottomSheetContainer>
}
