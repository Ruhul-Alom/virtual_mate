import React from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import "./topbar.css";
const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>VirtualMate</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search/>
                <input placeholder='Search' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
<div className="topbarLinks">
    <span className='topbarLink'>Home</span>
    <span className='topbarLink'>Timeline</span>
</div>
<div className="topbarIcon">
    <div className="topbarItemsIcon">
        <Person/>
        <div className="topbarIconBadge">1</div>
    </div>
    <div className="topbarItemsIcon">
        <Chat/>
        <div className="topbarIconBadge">1</div>
    </div>
    <div className="topbarItemsIcon">
        <Notifications/>
        <div className="topbarIconBadge">1</div>
    </div>
    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
</div>
        </div>

    </div>
  )
}

export default Topbar