import { Container, Grid } from '@mui/material';
import logo from '../../assets/icons/logo.svg';
import Form from './components/form/form.component';
import { Logo } from './login.styled';

export default function Login() {
    return (
        <>
            <Container>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={3} justifyContent={'center'}>
                        <Grid container justifyContent={'center'}>
                            <Logo src={logo} alt={'Netflix logo'} />
                            <Form />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}