import { useDispatch } from "react-redux";
import { setShowAllResultsModal } from "../components/reducers";
import { CloseButton, Modal } from "../components/Styles";
import CloseIcon from '@mui/icons-material/Close';

export const AllResults = () => {
    const dispatch = useDispatch();
    const allRestaurants = window.localStorage.getItem("restaurantResults");
    const parsedRestaurants = JSON.parse(allRestaurants)
    console.log(parsedRestaurants);

    // const listRes = () => {
    //     parsedRestaurants.results.filter(())
    // }
    return (
        <Modal>
            <CloseButton onClick={() => {
                dispatch(setShowAllResultsModal(false));
            }}><CloseIcon/></CloseButton>
        </Modal>
    )
}