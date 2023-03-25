import { useDispatch } from "react-redux";
import { setShowAllResultsModal } from "../components/reducers";
import { CloseButton, Modal } from "../components/Styles";
import CloseIcon from '@mui/icons-material/Close';
import { Name, Phone, Address } from "../components/Styles";

export const AllResults = () => {
    const dispatch = useDispatch();
    const allRestaurants = window.localStorage.getItem("restaurantResults");
    const parsedRestaurants = JSON.parse(allRestaurants)
    const restaurantArray = parsedRestaurants.results;

    const searchLink = (name, address) => {
        window.open(`http://google.com/search?q=${name}+${address}`, '_blank')
    }

    const phoneLink = (phone) => {
        document.location.href = `tel:${phone}`
    }

    return (
        <Modal style={{ maxHeight:'450px'}}>
            <CloseButton onClick={() => {
                dispatch(setShowAllResultsModal(false));
            }}><CloseIcon/></CloseButton>
            <div style={{overflow: 'scroll', maxHeight: '425px'}}>
                {restaurantArray.map((a) => {
                    return (
                        <div style={{border:'solid 3px black', padding:'4px', borderRadius:'10px'}}>
                            <Name style={{fontSize:'18px'}} onClick={() => {searchLink(a.poi.name, a.address.freeformAddress)}}>{a.poi.name}</Name>
                            <Phone style={{fontSize:'14px'}} onClick={()=> {phoneLink(a.poi.phone)}}>{a.poi.phone}</Phone>
                            <Address style={{fontSize:'14px'}}>{a.address.freeformAddress}</Address>
                        </div>
                    )
                })}
            </div>
        </Modal>
    )
}