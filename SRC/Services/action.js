import {FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE,FETCH_TYPE,EDITE_ITEM,FETCH_ITEM,REMOVE_ITEM,SEARCH_ITEM} from './type';






  
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

  const setRemoveItemAction = (id)  => {
    return{
        type : REMOVE_ITEM,
        payload : id
    }
}
  
  const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });

  const setSearchAction = (text) => {
    return{
        
        type : SEARCH_ITEM,
        payload : text
    }
}

  const setTypeAction = typeState=> {
  
    return {
        type : FETCH_TYPE,
        payload : typeState
    }
  }
  export const setSearchItem = text => {
  
    return setSearchAction (text);
  };

  
  const editAction = (id, type , item) => {
    return{
        type : EDITE_ITEM,
        payload : id,
        typeTemp : type,
        item : item
    }
  }

  
  export const setItem = (text , type ) => {
    var now = new Date();
    return dispatch => {
        let data = {
            "option": type,
            "type": text,
            "date":now.toLocaleDateString(),
            "time":now.toLocaleTimeString()
            
        };
        fetch(`http://10.0.2.2:3000/tasks`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(getData => {
                dispatch(setItemAction(getData))
            })
            .catch(error => error)
    }
  };



  export const setRemoveItem = (id ) => {
    return dispatch => {
        const url = "http://10.0.2.2:3000/tasks/";
           fetch(`${url}${id}` ,{
               method: 'DELETE'
           }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(setRemoveItemAction(id));
            })
    }
  };
  

  
  


//   export const  setItem = (text) => {
//     return setItemAction(text);
// } ;


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

  
  export const editItem = (id , type , item) => {
    
    return dispatch => {
       
        let data = {
            "type": type
        };
        const url = "http://10.0.2.2:3000/tasks/";
        fetch(`${url}${id}/?type=${type}`,
            {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(editAction(id , type , item))
            })
    }
  };