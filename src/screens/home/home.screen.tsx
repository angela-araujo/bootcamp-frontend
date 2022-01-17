import { Container, Grid } from '@mui/material';
import Header from '../../components/headers/header-main/hearder.component';
import Banner from './components/banner.component';
import Catalog from './components/movies.component';
import MyList from './components/my-list.component';
import { H1 } from './home.styled';
export default function Home() {

    return (
        <Container>
            <Header></Header>
            {/* 
            
            <Banner></Banner>

            <H1>{'Minha Lista'}</H1>
            <MyList />

            <H1>{'Filmes'}</H1>
            <Movies /> */}


            <Grid container justifyContent={'center'}>
                <Grid item xs={12} justifyContent="center">
                    <Banner></Banner>
                </Grid>
            </Grid>

            <Grid container justifyContent={'center'}>
                <Grid item xs={12} justifyContent="center">
                    <H1>{'Minha Lista'}</H1>
                    <MyList />

                    <H1>{'Filmes'}</H1>
                    <Catalog />
                </Grid>
            </Grid>
        </Container >
    )
}


