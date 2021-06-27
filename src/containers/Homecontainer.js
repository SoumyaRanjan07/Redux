import Home from "../components/Home";
import {connect} from 'react-redux'
import { addToCart } from "../services/Actions/Action1";
const mapStateToProps=state=>({
    data:state.Carditems

})

const mapDispatchToProps=dispatch=>(
    {
        addToCartHandler:data=>dispatch(addToCart(data))
    })

export default  connect(mapStateToProps,mapDispatchToProps)(Home) 








 
