type storageType={
    getApp: ()=>string
    setApp:(app: string)=>void
}

const LocalStorage: storageType={
    getApp: ()=> {return ""},
    setApp: (app: string)=>{}
}

LocalStorage.getApp= ()=>{
    const app= localStorage.getItem("app")
    return app? app : "auth"
}




LocalStorage.setApp=(app: string)=>{
    localStorage.setItem("app", app)
}


export default LocalStorage