import React from 'react'
import {Text} from 'react-native'
import { BottomSheet } from '.'
import {create} from 'react-test-renderer';

jest.useFakeTimers();
describe("BottomSheet", () => {

    it("visible match snapshot", () => {
        const component = create(<BottomSheet isVisble><Text>My component</Text></BottomSheet>)
        expect(component).toMatchSnapshot()
    })

    it("invisible match snapshot", () => {
        const component = create(<BottomSheet isVisble={false}><Text>My component</Text></BottomSheet>)
        expect(component).toMatchSnapshot()
    })
})