import { GET_DOG_REQUEST, GET_DOG_SUCCESS, GET_DOG_ERROR} from './constants';

export const getDogRequest = () => ({
  type: GET_DOG_REQUEST,
})

export const getDogSuccess = (data) => ({
  type: GET_DOG_SUCCESS,
  url: data.message
})

export const getDogError = (data) => ({
  type: GET_DOG_ERROR,
  payload: data.error
})
