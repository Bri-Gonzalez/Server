import './Server.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import { getOneServer } from '../../services/servers'
import {getAllPosts} from '../../services/posts'

function Server() {
  const [server, setServer] = useState([])
  const [posts, setPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchServer = async () => {
      const server = await getOneServer(id)
      setServer(server)
    }
    fetchServer()
  }, [id])

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      const serverPosts = postList.filter((post) => post.server_id === Number(id))
      setPosts(serverPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <p>{server.name}</p>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.user.username}</p>
            <p>{post.title}</p>
            {post.image ? <img src={post.image} alt={post.title} /> : ''}
            {post.text ? <p>{post.text}</p> : ''}
            <Link to={`/server/${server.id}/posts/${post.id}`}>
              <p>{post.comments.length} Comments</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Server
