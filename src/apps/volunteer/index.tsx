import { Provider } from "react-redux"
import { store } from "./store"
import Volunteer from "./App"



const Root= ()=>{
    return(
        <Provider store={store} children={<Volunteer />}/>
    )
}

export default Root