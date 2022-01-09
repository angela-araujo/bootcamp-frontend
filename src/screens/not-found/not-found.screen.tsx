import { Container, Grid } from "@mui/material";
import Header from "../../components/headers/header-main/hearder.component";
import MessageNotFound from "./components/not-found.component";

export default function NotFound() {
    return (
        <>
            <Header />
            <Container>
                <Grid container justifyContent={'center'}>                        
                    <Grid item xs={3} justifyContent={'center'}>
                        <MessageNotFound />
                    </Grid>
                </Grid>

            </Container>
        
        
        </>
    )
}