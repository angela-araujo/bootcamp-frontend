import { Container, Grid } from '@mui/material';
import Header from '../../components/headers/header-main/hearder.component';
export default function Home() {
    return (

        <Container>
            <Grid container justifyContent={'center'}>
                <Grid item xs={3} justifyContent="center">
                    <Grid container direction="row" alignItems="flex-start">
                        <Header />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}