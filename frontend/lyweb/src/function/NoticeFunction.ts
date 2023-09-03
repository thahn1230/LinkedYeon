/* 게시물 페이지에 필요한 함수*/

export interface Post {
    post_no: number;
    title: string;
    hit: number;
    date: Date;
    username: string;
    content: string;  
    //type: string;
  }

export const getPosts = async():Promise<Post[]> => {
    const response = await fetch('YOUR_BACKEND_URL/posts',{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
        //body: JSON.stringify(postNo)
    });
    if (!response.ok){
        const message = await response.text();
        throw new Error(message);
    }

    const data = await response.json();
    return data as Post[];
}


export const createPost = async(postData: Partial<Post>) => {
    const response = await fetch('YOUR_BACKEND_URL/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok){
        const message = await response.text();
        throw new Error(message);
    }
}

export const updatePost = async(postId: number, postData: Partial<Post>) => {
    const response = await fetch('YOUR_BACKEND_URL/posts/${postId}',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok){
        const message = await response.text();
        throw new Error(message);
    }
}

export const deletePost = async(postId: number) => {
    const response = await fetch('YOUR_BACKEND_URL/posts/${postId}',{
        method: 'DELETE',
    });

    if (!response.ok){
        const message = await response.text();
        throw new Error(message);
    }
}