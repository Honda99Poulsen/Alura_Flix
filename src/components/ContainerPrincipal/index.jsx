import styled from "styled-components"

const Div = styled.div`
    padding: 0 45px 95px 45px;
    background: #000000E5;
`


const ContainerPrincipal = ({children}) => {
    return(
        <Div>
            {children}
        </Div>
    )
}

export default ContainerPrincipal