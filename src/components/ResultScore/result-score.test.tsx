import React from 'react'
import { ResultScore } from '.'
import { create } from 'react-test-renderer';

describe("ResultScore", () => {
    const resultScore = create(<ResultScore mistakes={10} successes={8}/>)

    it("maches snapshot", () => {
        expect(resultScore).toMatchSnapshot()
    })

    it("shows correctly", () => {
        const correctText = resultScore.root.findByProps({testID:"result-score-successes-text"}).props
        const wrongText = resultScore.root.findByProps({testID:"result-score-mistakes-text"}).props

        expect(correctText.children).toEqual(8)
        expect(wrongText.children).toEqual(10)
    })
})