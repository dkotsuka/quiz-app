import styled from 'styled-components/native'

interface SeparatorProps {
    height?: number
    width?: number
}

export const Separator = styled.View`
    ${({height}: SeparatorProps) => height ? `height: ${height}px;` : null}
    ${({width}: SeparatorProps) => width ? `height: ${width}px;` : null}
`