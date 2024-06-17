import axios from "axios"

const mainURL=`https:/saved-monkfish-15.hasura.app/api/rest/`


const header={
    "Content-Type": "application/json",
    "Hasura-Client-Name": "hasura-console",
   "x-hasura-admin-secret": "eMKxMnY0lJAKHqIF98yLilnuAlpUJujNOrHiDR2e6IADI5VF7r5dt74Icumk8DHt"
}

const post={
    get: async(url: string)=> {
        return await axios.get(mainURL+url,{
            headers:header
        }).then(responseBody => {
            console.log(responseBody)
            responseBody
        }).catch(error=>{
            return error
        })
    },
    post: async(url: string, data:any)=> {
            return await axios.post(mainURL+url,
                data? JSON.stringify(data) : null
            ,{
                headers:header,
            })
    },
    delete: async(url: string)=> {
        return await axios.delete(mainURL+url,{
            headers:header,
        }).then(response=>{
            return response
        }).catch(error=>{
            return error
        })
    },
    put: async(url: string, data:any)=> {
        return await axios.put(mainURL+url,
             data? JSON.stringify(data) : null
            ,{
            headers:header,
        }).then(response=>{
            return response
        }).catch(error=>{
            return error
        })
    },
}

export default post