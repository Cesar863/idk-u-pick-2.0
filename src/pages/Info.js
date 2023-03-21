import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setShowInfoModal } from "../components/reducers"
import CloseIcon from '@mui/icons-material/Close'
import { Modal, InfoTextHeader, InfoText } from "../components/Styles"

export const Info = () => {
    const dispatch = useDispatch();

    return (
    <Modal>
        <Button sx={{display: 'flex', justifyContent: 'right', width: '100%'}} onClick={() => {
            dispatch(setShowInfoModal(false))
        }}>
            <CloseIcon/>
        </Button>
        <InfoTextHeader>About R.N.Grub</InfoTextHeader>
        <InfoText>Have you ever gone back and forth with someone on where to eat? R.N.Grub is the solution for you! <br/> <br/> R.N.Grub will select a place for you to eat by simply entering your zip code and pressing the "Submit" button. <br/><br/> Don't like your results? You can roll again by pressing the "Roll Again Button". <br/> <br/> Want to know more information on the place you are looking to eat at? simply click on the name of the place and you'll have all of the information you need. <br/> <br/> Want to call ahead to make reservations or check wait time? Click on the phone number and make the call.</InfoText>
        
    </Modal>
    )
}