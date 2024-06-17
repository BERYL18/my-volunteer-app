import { supabase } from "../../../helpers/supabase"


const Supabase={
    signUp: async (email: string, password: string)=>{return ""},
    signIn: async (email: string, password: string)=>{return ""},
    signOut: async (id: string)=>{return ""},
}

Supabase.signUp = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })

        console.log(data, error)
        return data.user.id? data.user.id: null
    } catch (error) {
       console.log(error) 
       return null
    }
}

Supabase.signIn =async (email: string, password: string) => {
    console.log(email, password)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    console.log({data: data, error: error})
    if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data.user.id
}


export default Supabase