import { Link } from "@mui/icons-material";
import { Button, Container, Divider, Typography } from "@mui/material";


export default function NotFound(){

    return(
        <Container>
            <Typography gutterBottom variant={'h3'}>Oops ! We couldnot find what you are looking for</Typography>
            <Divider></Divider>
            <Button component={Link} to='/catalog' fullWidth> Go back to the shop</Button>
            
        </Container>
    )

}