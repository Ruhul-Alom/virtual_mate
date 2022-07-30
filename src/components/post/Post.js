import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
 <span className="postUserName">Ruhul Alom</span>
 <span className="postDate">5 mins ago</span>
        </div>
        <div className="postTopCenter">
         
        </div>
        <div className="postTopRight">
          <MoreVert className=''/>
        </div>
        </div>

        <div className="postCenter">
        <span className='postText'>Hey! Its my first post </span>
          <img src="assets/post/1.jpeg" alt="" className="postImg" />
          </div>
          <div className="postBottom">
          <div className="postBottomLeft">
            <img  className="likeIcon" src="assets/like.png" alt="" />
            <img  className="likeIcon"src="assets/heart.png" alt="" />
            <span className="postLikeCounter">50 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomRightText">9 comments</span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Post