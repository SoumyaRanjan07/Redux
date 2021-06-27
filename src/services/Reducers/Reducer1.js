import { ADD_TO_CART } from '../Constant'
const initialState={
    carddata:[]
}

export default function Carditems(state = [],action)
{
switch(action.type)
{
case  ADD_TO_CART:
    console.warn("Reducer1",action);
return[
     ...state,
    { carddata:action.data}
]
default:
    return state
}
}
