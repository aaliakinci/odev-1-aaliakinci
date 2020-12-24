"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);


const ENDPOINT = 'https://jsonplaceholder.typicode.com';


 async function getData (userId) 
{
     
    const posts = [];
    const {data:users} = await _axios2.default.get(`${ENDPOINT}/users/${userId}`)
    const {data:post} = await _axios2.default.get(`${ENDPOINT}/posts?userId=${userId}`)
    posts.push(post);
    for(let i = 0 ; i<posts.length;i++)
    {
        users["post"]=posts[i]
    }
    return users
};

exports. default = getData;