import styled from "styled-components"
import HeaderLink from "../HeaderLink/index"

const HeaderEstilizado = styled.header`
    border-bottom: 5px solid #2271D1;
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35.5px 51.15px;
    background-color: #262626;
`
const Nav = styled.nav`
display: flex;
gap: 25px;
`

const Header = () => {
    return (
        <HeaderEstilizado>
            <Section>
                <img src="img/LogoMain.png" alt="logo"/>
                <Nav>
                    <HeaderLink to='/'>
                        HOME
                    </HeaderLink> 
                    <HeaderLink to='/nuevovideo'>
                        NUEVOVIDEO
                    </HeaderLink>   
                    
                </Nav>
        </Section>
        </HeaderEstilizado>
    )
}

export default Header