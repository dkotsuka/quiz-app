import React from 'react'
import { Separator } from '.'
import { create } from 'react-test-renderer';

describe("Separator", () => {
    const separator = create(<Separator width={10} height={10}/>)

    it("maches snapshot", () => {
        expect(separator).toMatchSnapshot()
    })
})