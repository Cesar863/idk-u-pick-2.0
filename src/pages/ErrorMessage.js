import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setShowErrorMessage } from "../components/reducers"

export const ErrorMessage = () => {
    const dispatch = useDispatch()
    
    return (
    <>
    <div>this is the error message</div>
    <Button onClick={() => {
        dispatch(setShowErrorMessage(false))
    }}>
        close error message
    </Button>
    </>
    )
}