import logo from '../../../assets/icons/logo.svg';
import menu from '../../../assets/icons/menu.svg';
import avatar from '../../../assets/icons/avatar-person.svg';
import { Logo, Menu, Profile } from './header.styled';
import { Container, Grid } from '@mui/material';


function Header() {
    return (
        <>

            <Grid container alignItems={'center'} justifyContent={'center'} margin={'15px 0'} height={'70px'}>
                <Grid item xs={1} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <a href='#'><Menu src={menu} alt={'Menu'} /></a>
                </Grid>
                <Grid item xs={6} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <Logo src={logo} alt={'Netflix logo'} />
                </Grid>
                <Grid item xs={1} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <a href='#'><Profile src={avatar} alt={'Perfil'} /></a>
                </Grid>
            </Grid>

        </>
    )
}

export default Header;