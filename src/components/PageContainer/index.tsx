import React from 'react'
import styled from 'styled-components/native'

interface PageContainerProps {
    padding?: number
    vPadding?: number
    hPadding?: number
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
    return <PageScrollContainer {...props}>
        {props.children}
    </PageScrollContainer>
}

const PageScrollContainer = styled.ScrollView`
    ${({padding}: PageContainerProps) => padding ? `padding: ${padding}px;` : null}
    ${({vPadding}: PageContainerProps) => vPadding ? `padding-vertical: ${vPadding}px;`: null}
    ${({hPadding}: PageContainerProps) => hPadding ? `padding-horizontal: ${hPadding}px;`: null}
`