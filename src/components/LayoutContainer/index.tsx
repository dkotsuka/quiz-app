import styled from 'styled-components/native'

type LayoutContainerProps = {
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
    alignItems?: "flex-start" | "center" | "flex-end"
}

const Row = styled.View`
    flex-direction: row;
    justify-content: ${({justifyContent}: LayoutContainerProps) => justifyContent ? justifyContent : "flex-start"};
    align-items: ${({alignItems}: LayoutContainerProps) => alignItems ? alignItems : "flex-start"};
`

const Column = styled.View`
    flex-direction: column;
    justify-content: ${({justifyContent}: LayoutContainerProps) => justifyContent ? justifyContent : "flex-start"};
    align-items: ${({alignItems}: LayoutContainerProps) => alignItems ? alignItems : "flex-start"};
`

export const LayoutContainer = {
    Row, Column
}