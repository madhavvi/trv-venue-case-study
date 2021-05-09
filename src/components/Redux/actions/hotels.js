export const Types = {
    GET_HOTELS_REQUEST: 'hotels/GET_HOTELS_REQUEST',
    GET_HOTELS_SUCCESS: 'hotels/GET_HOTELS_SUCCESS',
    HOTELS_ERROR: 'hotels/HOTELS_ERROR'
}

export const getHotelsRequest = () => ({
    type: Types.GET_HOTELS_REQUEST
})

export const getHotelsSuccess = ({items}) => ({
    type: Types.GET_HOTELS_SUCCESS,
    payload: {
        items
    }
})

export const hotelsError = ({error}) => ({
    type: Types.HOTELS_ERROR,
    payload: {
        error
    }
});