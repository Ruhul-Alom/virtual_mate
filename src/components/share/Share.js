import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { EmojiEmotions, Label, Room } from '@mui/icons-material';

const Share = () => {
  return (
 <div className="share">
  <div className="shareWrapper"> 
  <div className="shareTop">
    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
    <input type="text"  placeholder='what is in your mind' className='shareInput'/>
  </div>
  <hr className='shareHr'/>
  <div className="shareBottom">
    <div className="shareOptions">
      <div className="shareOption">
        <PermMediaIcon className="shareIcon"/>
        <span className="shareOptionText">Photo or Video</span>
      </div>
      <div className="shareOption">
        <Label className="shareIcon"/>
        <span className="shareOptionText">Tag</span>
      </div>
      <div className="shareOption">
        <Room className="shareIcon"/>
        <span className="shareOptionText">Location</span>
      </div>
      <div className="shareOption">
        <EmojiEmotions className="shareIcon"/>
        <span className="shareOptionText">Feeling</span>
      </div>
    </div>
    <button className='shareButton'>Share</button>
  </div>
  </div>
 </div>
  )
}

export default Share