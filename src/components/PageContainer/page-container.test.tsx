import React from 'react'
import { Text } from 'react-native'
import { PageContainer } from '.'
import { create } from 'react-test-renderer';

describe("LayoutCoPageContainerntainer", () => {
    
    it("matches snapshot with padding", () => {
        const component = create(<PageContainer padding={10}>
            <Text>First component</Text>
            <Text>Second component</Text>
        </PageContainer>)
        expect(component).toMatchSnapshot()
    })

    it("matches snapshot with vertical padding", () => {
        const component = create(<PageContainer vPadding={10}>
            <Text>First component</Text>
            <Text>Second component</Text>
        </PageContainer>)
        expect(component).toMatchSnapshot()
    })

    it("matches snapshot with horizontal padding", () => {
        const component = create(<PageContainer hPadding={10}>
            <Text>First component</Text>
            <Text>Second component</Text>
        </PageContainer>)
        expect(component).toMatchSnapshot()
    })
})