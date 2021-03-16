import React from 'react'
import { AnswerSelector } from '.'
import {create, act} from 'react-test-renderer';

describe("AnswerSelector", () => {
    const mockFn = jest.fn()
    const component = create(<AnswerSelector text="My answer" isSelected={true} onPress={mockFn}/>)
    
    it("match snapshot", () => {
        expect(component).toMatchSnapshot()
    })

    it("call the function when pressed", () => {
        const touchable = component.root.findByProps({testID:"answer-selector-touchable"}).props
        act(() => touchable.onPress())
        act(() => touchable.onPress())
        act(() => touchable.onPress())

        expect(mockFn).toBeCalled()
        expect(mockFn).toBeCalledTimes(3)
    })

})