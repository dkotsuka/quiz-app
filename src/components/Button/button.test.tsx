import React from 'react'
import { Button } from '.'
import {create, act} from 'react-test-renderer';


describe("Button", () => {
    const primaryMockFn = jest.fn()
    const secondaryMockFn = jest.fn()
    const primaryBtn = create(<Button.Primary text="Primary" onPress={primaryMockFn}/>)
    const primaryBtnWithIcon = create(<Button.Primary text="Primary" onPress={primaryMockFn} icon="arrowRight"/>)
    const secondaryBtn = create(<Button.Secondary text="Secondary" onPress={secondaryMockFn}/>)

    it("Primary match snapshot", () => {
        expect(primaryBtn).toMatchSnapshot()
    })

    it("Primary with icon match snapshot", () => {
        expect(primaryBtnWithIcon).toMatchSnapshot()
    })

    it("Secondary match snapshot", () => {
        expect(secondaryBtn).toMatchSnapshot()
    })

    it("Primary function is called", () => {
        const touchable = primaryBtn.root.findByProps({testID:"primary-button-touchable"}).props
        act(() => touchable.onPress())
        expect(primaryMockFn).toBeCalled()
    })

    it("Primary function is called", () => {
        const touchable = primaryBtnWithIcon.root.findByProps({testID:"primary-button-touchable"}).props
        act(() => touchable.onPress())
        expect(primaryMockFn).toBeCalledTimes(2)
    })

    it("Secondary function is called", () => {
        const touchable = secondaryBtn.root.findByProps({testID:"secondary-button-touchable"}).props
        act(() => touchable.onPress())
        expect(secondaryMockFn).toBeCalled()
    })
})