import React from "react";

export const Results = (restaurant) => {
    console.log(restaurant)
    const name = restaurant.restaurant.poi.name
    const phone = restaurant.restaurant.poi.phone
    const address = restaurant.restaurant.address.freeformAddress

    return(
        <div>
            <div>
                the results are showing
            </div>
            <div>
                {name}
            </div>
            <div>
            {phone}
            </div>
            <div>
                {address}
            </div>
        </div>
    )
}