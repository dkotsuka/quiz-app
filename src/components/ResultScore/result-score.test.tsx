import React from 'react'
import { ResultScore } from '.'
import { create } from 'react-test-renderer';
import { Score } from '../../screens/QuestionScreen/question-screen.types';

describe("ResultScore", () => {
    const score: Score = {
        easy: [1,2],
        medium: [3,4],
        hard: [5,6]
    }
    
    const resultScore = create(<ResultScore score={score} />)

    it("maches snapshot", () => {
        expect(resultScore).toMatchSnapshot()
    })

    it("shows correctly", () => {
        const correctText = resultScore.root.findByProps({testID:"result-score-successes-text"}).props
        const wrongText = resultScore.root.findByProps({testID:"result-score-mistakes-text"}).props

        expect(correctText.children).toEqual(9)
        expect(wrongText.children).toEqual(12)
    })
})