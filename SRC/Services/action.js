import {FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE,FETCH_TYPE,FETCH_ITEM,REMOVE_ITEM} from './type';



  
  const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  const fetchProductsSuccess = products => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    };
  };

  const setItemAction= object => {
    return {
        type : FETCH_ITEM,
        payload : object
    };
  };

  const setRemoveItemAction = (index)  => {
    return{
        type : REMOVE_ITEM,
        payload : index
    }
}
  
  const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });

  
  const setTypeAction = typeState=> {
  
    return {
        type : FETCH_TYPE,
        payload : typeState
    }
  }
//   export const setItem = (text , type ) => {
//     var date = Date.now();
//     return dispatch => {
//         let data = {
//             "option": text,
//             "type": type,
            
//         };
//         fetch(`http://10.0.2.2:3000/tasks`,
//             {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data)
//             }
//         )
//             .then(response => response.json())
//             .then(getData => {
//                 dispatch(setItemAction(getData))
//             })
//             .catch(error => error)
//     }
//   };


  export const  setItem = () => {
    return setItemAction({"type": "txt", "object": "Work"});
} ;


  export const  setRemoveItem = index => {
    return setRemoveItemAction(index);
} ;

export const setType = type =>{
    return setTypeAction (type)
  }
  

  export const fetchProducts = () => {
    return dispatch => {
         
      dispatch(fetchProductsBegin());
      fetch("http://10.0.2.2:3000/tasks")
        .then(data =>  data.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  };
  