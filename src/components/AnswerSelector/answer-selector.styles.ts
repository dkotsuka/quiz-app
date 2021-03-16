import styled from 'styled-components/native'

export const AnswerSelectorContainer = styled.TouchableOpacity`
    border-color: #4D8AF0;
    border-radius: 8px;
    border-width: ${({isSelected}: {isSelected: boolean}) => isSelected ? 2 : 0}px;
    padding: ${({isSelected}: {isSelected: boolean}) => isSelected ? 17 : 19}px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    shadow-color: #000000;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 3;
`