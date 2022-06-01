import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Author from './author.component'

export default function Comments(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
      const getComments = async () => {
          const result = await axios.get(`http://localhost:3001/comments?postId=${props.postId}`)
          setComments(result.data)
      }
      getComments();
  }, [])

  return (
    <ul className="list-group">
      {comments.map((comment, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {comment.body}
          <Author userId={comment.userId}></Author>
        </li>
      ))}
    </ul>
  )
}
