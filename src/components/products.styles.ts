import { Button, IconButton } from "@material-ui/core"
import { Image } from "@material-ui/icons"
import { styled } from "@material-ui/styles"

export const StyledButton = styled(IconButton)({
    position : "fixed",
    zIndex : 200,
    right : "50px",
    top : "10px",
    color : "black"
    
})

export const Infromation = styled(Button)({
    display :"flex",
    justifyContent : "space-between"
})

export const imagepi =  styled(Image)({
    maxWidth : "80px",
    objectFit :"cover",
    marginLeft :"40px"
})