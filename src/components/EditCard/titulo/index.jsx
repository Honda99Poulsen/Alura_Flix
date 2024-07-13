import styled from "styled-components"

const H1 = styled.h1`
    font-size: 60px;
    font-weight: 900;
    color: ${props => props.$color ? props.$color : "#2271d1"};
`

const Titulo = ({children, color}) => {
    return(
        <H1 $color={color}>{children}</H1>
    )
}

export default Titulo