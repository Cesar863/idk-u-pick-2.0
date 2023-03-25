import { useDispatch } from "react-redux";
import { setShowAllResultsModal } from "../components/reducers";
import { CloseButton, Modal } from "../components/Styles";
import CloseIcon from '@mui/icons-material/Close';

export const AllResults = () => {
    const dispatch = useDispatch();
    const allRestaurants = window.localStorage.getItem("restaurantResults");
    const parsedRestaurants = JSON.parse(allRestaurants)
    const restaurantArray = parsedRestaurants.results

    return (
        <Modal style={{ maxHeight:'450px'}}>
            <CloseButton onClick={() => {
                dispatch(setShowAllResultsModal(false));
            }}><CloseIcon/></CloseButton>
            <div style={{overflow: 'scroll', maxHeight: '425px'}}>
                {restaurantArray.map((a) => {
                    return (
                        <div>
                            <div>{a.poi.name}</div>
                            <div>{a.poi.phone}</div>
                            <div>{a.address.freeformAddress}</div>
                        </div>
                    )
                })}
            </div>
        </Modal>
    )
}