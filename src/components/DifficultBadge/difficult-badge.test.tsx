import React from 'react'
import { DifficultBadge } from '.'
import {create} from 'react-test-renderer';

describe("DifficultBadge", () => {
    it("easy badge matches snapshot", () => {
        const easyBadge = create(<DifficultBadge level="easy" />)
        expect(easyBadge).toMatchSnapshot()
    })

    it("medium badge matches snapshot", () => {
        const mediumBadge = create(<DifficultBadge level="medium" />)
        expect(mediumBadge).toMatchSnapshot()
    })

    it("hard badge matches snapshot", () => {
        const hardBadge = create(<DifficultBadge level="hard" />)
        expect(hardBadge).toMatchSnapshot()
    })
})