import React from 'react'
import { Text } from 'react-native'
import { LayoutContainer } from '.'
import { create } from 'react-test-renderer';

describe("LayoutContainer", () => {
    
    it("column container matches snapshot", () => {
        const columnContainer = create(<LayoutContainer.Column >
            <Text>First component</Text>
            <Text>Second component</Text>
        </LayoutContainer.Column>)
        expect(columnContainer).toMatchSnapshot()
    })

    it("row container matches snapshot", () => {
        const columnContainer = create(<LayoutContainer.Row >
            <Text>First component</Text>
            <Text>Second component</Text>
        </LayoutContainer.Row>)
        expect(columnContainer).toMatchSnapshot()
    })
})