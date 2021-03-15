import styled from 'styled-components/native'

type DividerProps = {
    vertical?: boolean
    width?: number
}

export const Divider = styled.View`
    ${({vertical}: DividerProps) => vertical ? `height: 100%;` : `width: 100%;`}    
    ${({vertical, width}: DividerProps) => `${vertical ? "border-left-width" : "border-top-width"}:${width || 1}px;`}
    border-color: #B8BED5;
`