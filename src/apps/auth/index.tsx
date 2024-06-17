import { Provider } from "react-redux"
import { store } from "./store"
import Auth from "./App"


const Root= ()=>{
    return(
        <Provider store={store} children={<Auth />}/>
    )
}

export default Root