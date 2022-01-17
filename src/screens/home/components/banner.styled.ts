import styled from 'styled-components';

const UlBanner = styled.ul`
    color: ${props => props.theme.palette.typography.primary};
    list-style-type: none;
    
`
export const H2Banner = styled.h2`
    background-color: transparent;
    color: black;
`

export const ImgBanner = styled.img`
    border-radius: 65px;
    /* width: 1140px; */
    /* height: 534px; */
`

export const DivBanner = styled.div`
    height: 534px;
`
export default UlBanner