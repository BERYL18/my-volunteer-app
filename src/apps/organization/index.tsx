import { Provider } from "react-redux"
import { store } from "./store"
import Organization from "./App"


const Root= ()=>{
    return(
        <Provider store={store} children={<Organization />}/>
    )
}

export default Root