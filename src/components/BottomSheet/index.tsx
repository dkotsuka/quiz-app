import React, { useEffect, useState } from 'react'
import { Animated, SafeAreaView } from 'react-native'
import { BottomSheetContainer } from './bottom-sheet.styles'

interface BottomSheetProps {
    isVisble: boolean
}

export const BottomSheet: React.FC<BottomSheetProps> = ({isVisble, children}) => {
    const [animValue] = useState(new Animated.Value(0))

    useEffect(() => {
        animate()
    }, [isVisble])

    const animate = () => {
        Animated.timing(animValue, {
            toValue: isVisble ? 1 : 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };
    
    return <BottomSheetContainer style={{ opacity: animValue}}>
        {children}
        <SafeAreaView />
    </BottomSheetContainer>
}
