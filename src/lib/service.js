
import axios from 'axios'


const ENDPOINT = 'https://jsonplaceholder.typicode.com';


 async function getData (userId) 
{
     
    const posts = [];
    const {data:users} = await axios.get(`${ENDPOINT}/users/${userId}`)
    const {data:post} = await axios.get(`${ENDPOINT}/posts?userId=${userId}`)
    posts.push(post);
    for(let i = 0 ; i<posts.length;i++)
    {
        users["post"]=posts[i]
    }
    return users
};

export default getData;