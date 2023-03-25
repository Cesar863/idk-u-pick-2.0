import { useDispatch } from "react-redux";
import { setShowAllResultsModal } from "../components/reducers";
import { CloseButton, Modal } from "../components/Styles";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Name, Phone, Address } from "../components/Styles";
import { useState } from "react";

export const AllResults = () => {
    const dispatch = useDispatch();
    const allRestaurants = window.localStorage.getItem("restaurantResults");
    const parsedRestaurants = JSON.parse(allRestaurants)
    const restaurantArray = parsedRestaurants.results;
    const [selectedCategory, setSelectedCategory] = useState('');

    const searchLink = (name, address) => {
        window.open(`http://google.com/search?q=${name}+${address}`, '_blank')
    }

    const phoneLink = (phone) => {
        document.location.href = `tel:${phone}`
    }
    const getCategories = (restaurants) => {
        const copy = [...restaurants]
        let unique = [];
        copy.filter((a) => {
            return a.poi.categories.forEach((b) => {
                if(!unique.includes(b)){
                    unique.push(b);
                }
            })
        });
        return unique;
    }

    const setSelectedCategoryHandler = (e) => {
        setSelectedCategory(e.target.value);
    }
    const categories = getCategories(restaurantArray);

    let filteredRestaurants = restaurantArray

    if(selectedCategory !== ''){
        const results = restaurantArray.filter((a) => {
            return a.poi.categories.find((b) => {
                return b === selectedCategory
            })
        })
        filteredRestaurants = results;
    }

    return (
        <Modal style={{ maxHeight:'400px'}}>
            <div>
            <CloseButton onClick={() => {
                    dispatch(setShowAllResultsModal(false));
                }}><CloseIcon/></CloseButton>
                <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={selectedCategory} onChange={setSelectedCategoryHandler} label="category">
                    {categories.map((a) => {
                        return (<MenuItem value={a}>{a.charAt(0).toUpperCase() + a.slice(1)}</MenuItem>)
                    })}
                </Select>
                </FormControl>
            </div>
            <div style={{overflow: 'scroll', maxHeight: '320px'}}>
                {filteredRestaurants.map((a) => {
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