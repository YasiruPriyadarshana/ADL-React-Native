import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
    // selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: action.image.uri
                    },
                    location:action.location
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                // selectedPlace: null
            };

        // case SELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedPlace: state.places.find(place => {
        //             return place.key === action.placeKey;
        //         })
        //     };
        // case DESELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedPlace: null
        //     };
        default:
            return state;
    }
};

export default reducer;