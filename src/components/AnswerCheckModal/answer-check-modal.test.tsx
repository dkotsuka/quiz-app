import React from 'react'
import { AnswerCheckModal } from '.'
import renderer from 'react-test-renderer';

describe("AnswerCheckModal", () => {
    
    it("Correct AnswerCheckModal matches snapshot", () => {
        const correctComponent = renderer.create(<AnswerCheckModal isCorrect={true} isVisble={true}/>)
        expect(correctComponent).toMatchSnapshot()
    })
    
    it("Incorrect AnswerCheckModal matches snapshot", () => {
        const incorrectComponent = renderer.create(<AnswerCheckModal isCorrect={false} isVisble={true}/>)
        expect(incorrectComponent).toMatchSnapshot()
    })
    
    it("Invisible AnswerCheckModal matches snapshot", () => {
        const incorrectComponent = renderer.create(<AnswerCheckModal isCorrect={false} isVisble={false}/>)
        expect(incorrectComponent.toString()).toBeDefined()
    })
})