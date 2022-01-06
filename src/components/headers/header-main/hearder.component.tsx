import styled, {css} from 'styled-components';
import logo from '../../../assets/icons/logo.svg';
import menu from '../../../assets/icons/menu.svg';

const DivLogo = styled.a`
    &::before {
        content: url(${logo});
    }
`

const DivNavigation = styled.div`
    width: 100%;
    top: 0;
    height: 77px;
    
`
// Menu de navegação
const NavLeft = styled.a`
    
    background-image: url(${menu});
    max-height: 77px;

`

// Menu de perfil do usuário logado
const NavRight = styled.div`
    width: 100%;
    top: 0;
    height: 77px;
    
`
function Header() {
    return (
        <DivNavigation>
            <NavLeft></NavLeft>
            <DivLogo />
            <NavRight></NavRight>
        </DivNavigation>
    )
}

export default Header;