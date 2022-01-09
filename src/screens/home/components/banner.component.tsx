import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { H2Banner, ImgBanner } from '../components/banner.styled';

export default function Banner() {
    const items = [
        {
            name: 'Titanic',
            poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
            backdrop: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg',
        },
        {
            name: 'Venom',
            poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
            backdrop: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <H2Banner>{props.item.name}</H2Banner>
            <ImgBanner src={props.item.poster} alt={props.item.name} />

            <Button className="CheckButton">
                            
            </Button>
            
        </Paper>
    )
}