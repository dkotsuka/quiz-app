import React from 'react'
import { Divider } from '.'
import {create} from 'react-test-renderer';

describe("Divider", () => {
    it("vertical divider matches snapshot", () => {
        const divider = create(<Divider vertical width={2}/>)
        expect(divider).toMatchSnapshot()
    })

    it("horizontal divider matches snapshot", () => {
        const divider = create(<Divider vertical={false} width={2}/>)
        expect(divider).toMatchSnapshot()
    })
})