import { Container, Grid } from "@mui/material";
import Header from "../../components/headers/header-main/hearder.component";
import MessageNotFound from "./components/not-found.component";

export default function NotFound() {
    return (
        <>
            <Container>
                <Grid item xs={3} justifyContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <Header />
                        <MessageNotFound />
                    </Grid>
                </Grid>

            </Container>
        
        
        </>
    )
}