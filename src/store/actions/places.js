import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
    return  dispatch =>{
        const placeData={
            name:placeName,
            location:location
        }
        fetch("https://awesome-places-308711-default-rtdb.firebaseio.com/places.json", {
            method:"POST",
            body:JSON.stringify(placeData)
        })
        .catch(err=> console.log(err))
        .then(res=>res.json())
        .then(parsedRes =>{
            console.log(parsedRes);
        });
    };
};

export const deletePlace = (key) => {
    return {
        type:DELETE_PLACE,
        placeKey:key
    };
};

/*
type:ADD_PLACE,
        placeName:placeName,
        location:location,
        image:image
export const selectPlace = (key) => {
    return {
        type:SELECT_PLACE,
        placeKey:key
    };
};

export const deselectPlace = () => {
    return {
        type:DESELECT_PLACE
    };
};
*/