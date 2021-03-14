import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const BottomSheetContainer = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding-vertical: 14px;
    padding-horizontal: 42px;
    shadow-color: #000000;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 3;
    z-index: 10;
`