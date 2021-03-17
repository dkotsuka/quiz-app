import React from 'react'
import { ErrorPlaceHolder } from '.'
import {create} from 'react-test-renderer';

describe("ErrorPlaceHolder", () => {
    it("matches snapshot", () => {
        const divider = create(<ErrorPlaceHolder />)
        expect(divider).toMatchSnapshot()
    })
})