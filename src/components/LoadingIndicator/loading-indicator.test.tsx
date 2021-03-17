import React from 'react'
import { LoadingIndicator } from '.'
import {create} from 'react-test-renderer';

describe("LoadingIndicator", () => {
    it("matches snapshot", () => {
        const loading = create(<LoadingIndicator />)
        expect(loading).toMatchSnapshot()
    })
})