import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Comments from './comments.component';

export default function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            const result = await axios.get('http://localhost:3001/posts');
            setPosts(result.data)
        }
        getPosts();
    }, [])

  return (
    <div clas="card">
        {posts.map((post, index) => (
            <div key={index} className="card-body">
                <h6  className="card-title">
                    {post.title}
                </h6>
                <div className='card-text'>
                    {post.content}
                    <Comments postId={post.id}></Comments>
                </div>
            </div>
        ))}
    </div>
  )
}
