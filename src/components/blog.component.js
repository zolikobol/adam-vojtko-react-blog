import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const resp = async () => {
            const result = await axios.get('http://localhost:3001/posts');
            setPosts(result.data)
        }
        resp();
    }, [])

  return (
    <div>
        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    {post.title}
                </li>
            ))}
        </ul>
    </div>
  )
}
