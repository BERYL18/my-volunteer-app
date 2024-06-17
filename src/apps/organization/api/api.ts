import post from "../../../helpers/axios"

export const CreatePost  = async (data: any) => {
    const response = post.post (
        " post/create",
        data 
     )
     return data
}

export const DeletePost  = async (data: any) => {
    const response = await post.delete(
        `post/${data}/delete`
    )
}


