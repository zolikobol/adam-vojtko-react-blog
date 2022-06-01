import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Author(props) {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        const getAuthor = async () => {
            const result = await axios.get(`http://localhost:3001/users?id=${props.userId}`)
            setAuthor(result.data[0])
        }
        getAuthor();
    }, [])
  return (
    <div>{author.displayName}</div>
  )
}
