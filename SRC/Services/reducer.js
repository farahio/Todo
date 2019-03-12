import {REMOVE_ITEM,FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE,FETCH_TYPE,FETCH_ITEM} from './type';
  
  const initialState = {
    id: 0,
    items: [],
    selectedItem : [],
    
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload,
          selectedItem: action.payload,
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          items: [],
          selectedItem: []
        };
        case REMOVE_ITEM:
        return {
            ...state,
            items : [
                ...state.items.slice(0,action.payload),
                ...state.items.slice(action.payload + 1 )
            ],
            selectedItem : [
                ...state.items.slice(0,action.payload),
                ...state.items.slice(action.payload + 1 )
            ]
        };
        case FETCH_ITEM:
            return {
                ...state,
                items : [...state.items , action.payload],
                selectedItem : [...state.selectedItem , action.payload]
            };
            case FETCH_TYPE:
            let filteredData=[]
      
            filteredData=
            state.items.filter(
                item => item.option.toUpperCase().includes(action.payload.toUpperCase())
            );
           
        return {
            ...state,
            selectedItem : [...filteredData]
        };

     
        default:
        return state;
    }
  }
  
  export default reducer; 