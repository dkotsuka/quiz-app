import React from 'react'
import { Typography } from '.'
import { create } from 'react-test-renderer';

describe("Typography", () => {
    const typoH1 = create(<Typography.H1>H1 Text</Typography.H1>)
    const typoH2 = create(<Typography.H2>h2 Text</Typography.H2>)
    const typoBody = create(<Typography.Body>Body Text</Typography.Body>)
    const typoSmall = create(<Typography.Small>Small Text</Typography.Small>)

    it("maches snapshot", () => {
        expect(typoH1).toMatchSnapshot()
        expect(typoH2).toMatchSnapshot()
        expect(typoBody).toMatchSnapshot()
        expect(typoSmall).toMatchSnapshot()
    })
})