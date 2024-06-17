import post from "../../../helpers/axios"


export const CreateVolunteer= async(data): Promise<{id: string}>=>{
    try {
        const response= await post.post('volunteer/create', data)
        //@ts-ignore
        return response.data.insert_user_one
    } catch (error) {
        console.log(error)
        return null
    }
}


export const CreateOrganization= async(data) : Promise<{id: string}>=>{
    try {
        const response= await post.post('organization/create', data)
        console.log(response)
        //@ts-ignore
        return response.data.insert_organization_one
    } catch (error) {
        console.log(error)
        return null
    }
}