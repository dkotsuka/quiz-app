import styled from 'styled-components/native'

export const AnswerCheckBackGround = styled.View`
    background-color: rgba(255,255,255,0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
`

export const AnswerCheckContainer = styled.View`
    align-items: center;
    padding-horizontal: 66px;
    padding-vertical: 44px;
    margin-bottom: 100px;
    background-color: white;
    border-color: ${({isCorrect}: {isCorrect: boolean}) => isCorrect ? "#32CB82" :  "#FF4F4F"};
    border-width: 3px;
    border-radius: 8px;
    shadow-color: #000000;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 3;
`