import styled from "styled-components"

const Pie = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000E5;
    border-top: 5px solid #2271d1;
    height: 20vh;
`

const Footer = () => {
    return(
        <Pie>
            <img src="public/img/logoMain.png" alt="Logo" />
        </Pie>
    )
}

export default Footer