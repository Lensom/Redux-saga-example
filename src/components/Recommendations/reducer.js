import { GET_DOG_REQUEST, GET_DOG_SUCCESS, GET_DOG_ERROR} from './constants';

const initialState = {
  url: '',
  loading: false,
  error: false,
};

export const dogReducer = (state = initialState , action) => {
  switch (action.type) {
    case GET_DOG_REQUEST: {
      return {
        url: '',
        loading: true,
        error: false,
      };
    }
    case GET_DOG_SUCCESS: {
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    }
    case GET_DOG_ERROR: {
      return {
        url: '',
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}

export const getTopic = (state) => state.dogReducer.url;