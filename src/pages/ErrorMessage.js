import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setShowErrorMessage } from "../components/reducers"
import CloseIcon from '@mui/icons-material/Close'
import { ErrorModal, ErrorMessageText } from "../components/Styles"


export const ErrorMessage = () => {
    const dispatch = useDispatch();
    
    return (
    <ErrorModal>
        <Button sx={{display: 'flex', justifyContent: 'right', width: '100%'}} onClick={() => {
            dispatch(setShowErrorMessage(false))
        }}>
            <CloseIcon/>
        </Button>
        <ErrorMessageText>
            Error: The zip code that was entered was not a valid zip code. Please enter a valid zip code and try again.
        </ErrorMessageText>
    </ErrorModal>
    )
}