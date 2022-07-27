import React from 'react'
import "./sidebar.css"

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChatIcon from '@mui/icons-material/Chat';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
// import BookMarkIcon from '@mui/icons-material/BookMark';
import QuestionMarkIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWraper">
         <ul className="sidebarList">
            <li className="sidebarListItem">
                < RssFeedIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Feed</span>
            </li>
            <li className="sidebarListItem">
                < ChatIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Chat</span>
            </li>
            <li className="sidebarListItem">
                < PlayCircleIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Video</span>
            </li>
            <li className="sidebarListItem">
                < GroupsIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Groups</span>
            </li>
            {/* <li className="sidebarListItem">
                <BookMarkIcon/>
                <span className='sidebarListItemText'>Bookmarks</span>
            </li> */}
            <li className="sidebarListItem">
                <QuestionMarkIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkIcon className='sidebarListItemIcon'/>
                <span className='sidebarListItemText'>Jobs</span>
            </li>
            <li className="sidebarListItem">
                < AccountBalanceIcon className='sidebarListItemIcon' />
                <span className='sidebarListItemText'>Courses</span>
            </li>
         </ul>
         <button  className='sidebarButton'>Show More</button>
         <hr className='sidebarHorizontalLine'/>
        <ul className="userFriendList">
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Md Ruhul</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Md Arif</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Alom</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Asiq</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Ahmed</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Nadir</span>
            </li>
            <li className="userFriend">
                <img src="/assets/person/2.jpeg" alt="" className="userFriendImage" />
              <span className="userFriendName">Shahan</span>
            </li>
            
        </ul>
        </div>
      
    </div>
  )
}

export default Sidebar