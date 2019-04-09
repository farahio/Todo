import {REMOVE_ITEM,FETCH_PRODUCTS_BEGIN,SEARCH_ITEM,FETCH_PRODUCTS_SUCCESS,EDITE_ITEM,FETCH_PRODUCTS_FAILURE,FETCH_TYPE,FETCH_ITEM} from './type';

  const initialState = {
    id: 0,
    items: [],
    selectedItem : [],
  

  };


  
  function fetchReducer(state = initialState, action) {
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

        case SEARCH_ITEM:
        let filteredDatas =[]
        filteredDatas = 
            state.selectedItem.filter(item => 
                item.type.toUpperCase().includes(action.payload.toUpperCase())
            );
        return {
            ...state,
            selectedItem : [...filteredDatas]
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
        const index = state.items.findIndex(({ id }) => id == action.payload );
        const indexSelected = state.selectedItem.findIndex(({ id }) => id == action.payload );
        return {
            ...state,
            items : [
                ...state.items.slice(0,index),
                ...state.items.slice(index + 1 )
            ],
            selectedItem : [
                ...state.selectedItem.slice(0,indexSelected),
                ...state.selectedItem.slice(indexSelected + 1 )
            ]
        };

        case EDITE_ITEM : 
        

        const indexT= state.items.findIndex(({ id }) => id == action.payload );
        const indexSelectedT = state.selectedItem.findIndex(({ id }) => id == action.payload );
        return {
            ...state,
            items : [
                ...state.items.slice(0,indexT),

                {"id": action.item.id , "type" : action.typeTemp
                 , "date": action.item.date , "option":action.item.option},
                
                ...state.items.slice(indexT + 1 )
            ],
            selectedItem : [
                ...state.selectedItem.slice(0,indexSelectedT),
                
                {"id": action.item.id , "type" : action.typeTemp , "date": action.item.date , "option":action.item.option},
                
                ...state.selectedItem.slice(indexSelectedT + 1 )
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
            selectedItem : filteredData
        };

        default:
        return state;
    }
  }
  
  export default fetchReducer; 