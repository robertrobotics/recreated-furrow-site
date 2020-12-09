import styled, { css } from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;

    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1244px;
    }

    ${props => props.fluid && 
    css`
        padding: 0;
        margin: 0;
        max-width: 1005;   
    `}
`

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;

    ${props => props.spaceBetween &&
    css`
        justify-content: space-between;
    `}
    ${props => props.flexEnd &&
    css`
        justify-content: flex-end;
    `}
    ${props => props.spaceBetween &&
    css`
        justify-content: top;
    `}
    ${props => props.noHeight &&
    css`
        height: 0;
    `}
`

export const Cursor = styled.div`
    position: absolute;
    top: 0;
    width: 0;
    width: 32px;
    height: 32px;
    background-color: ${props => props.theme.red};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all .3s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
    &.pointer {
        border: 4px solid ${props => props.theme.text} !important;
        background: transparent !important;
        width: 56px; 
        height: 56px;
    }
    &.hovered {
        background: transparent !important;
        width: 56px; 
        height: 56px;
        border: 4px solid ${props => props.theme.red};
    }
    &.nav-open {
        background: ${props => props.theme.text};
    }
`