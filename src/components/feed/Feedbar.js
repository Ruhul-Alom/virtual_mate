import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
const Feedbar = () => {
  return (
    <div className='feed'>
      <div className="feedWraper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feedbar