function getProducts() {
    return fetch("https://api.myjson.com/bins/13pqgi")
      .then(handleErrors)
      .then(res => res.json());
  }
  
  export const fetchProducts = () => {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return getProducts()
        .then(data => {
          dispatch(fetchProductsSuccess(data.clients));
          console.log(data.clients)
          return data.clients;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  export const fetchSingleProduct = (id) => {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return getProducts()
        .then(data => {
          dispatch(fetchSingleProductSuccess(data.clients[id-1]));
          
          return data.clients-1
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
  export const FETCH_SINGLE_PRODUCT = "FETCH_SINGLE_PRODUCT";
  export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
  export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = clients => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { clients }
  });

  export const fetchSingleProductSuccess = id => ({
    type: FETCH_SINGLE_PRODUCT,
    payload: id
  });
  
  export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });
  
  