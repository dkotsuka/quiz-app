import React from 'react'
import { LevelScore } from '.'
import { create } from 'react-test-renderer';
import { Score } from '../../screens/QuestionScreen/question-screen.types';

describe("LevelScore", () => {
    const score: Score = {
        easy: [1,2],
        medium: [3,4],
        hard: [5,6]
    }
    const easyScore = create(<LevelScore score={score} level="easy"/>)
    const mediumScore = create(<LevelScore score={score} level="medium"/>)
    const hardScore = create(<LevelScore score={score} level="hard"/>)

    it("maches snapshot", () => {
        expect(easyScore).toMatchSnapshot()
        expect(mediumScore).toMatchSnapshot()
        expect(hardScore).toMatchSnapshot()
    })

    it("counts correctly", () => {
        const correctText = easyScore.root.findByProps({testID:"level-score-text-correct"}).props
        const wrongText = easyScore.root.findByProps({testID:"level-score-text-wrong"}).props

        expect(correctText.children).toEqual(["Correct: ", 1])
        expect(wrongText.children).toEqual(["Wrong: ", 2])
    })

    it("counts correctly", () => {
        const correctText = mediumScore.root.findByProps({testID:"level-score-text-correct"}).props
        const wrongText = mediumScore.root.findByProps({testID:"level-score-text-wrong"}).props

        expect(correctText.children).toEqual(["Correct: ", 3])
        expect(wrongText.children).toEqual(["Wrong: ", 4])
    })

    it("counts correctly", () => {
        const correctText = hardScore.root.findByProps({testID:"level-score-text-correct"}).props
        const wrongText = hardScore.root.findByProps({testID:"level-score-text-wrong"}).props

        expect(correctText.children).toEqual(["Correct: ", 5])
        expect(wrongText.children).toEqual(["Wrong: ", 6])
    })
})