import { Container, Grid } from '@mui/material';
import Header from '../../components/headers/header-main/hearder.component';
import Banner from './components/banner.component';
import MyList from './components/my-list.component';
export default function Home() {
    return (

        <Container>
            <Grid container justifyContent={'center'}>
                <Grid item xs={3} justifyContent="center">
                    <Grid container direction="row" alignItems="flex-start">
                        <Header></Header>
                        
                        <Grid item justifyContent="center">
                            <Banner></Banner>                        
                            <MyList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}