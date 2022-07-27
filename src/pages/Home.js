import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import "./home.css";
import Rightbar from '../components/rightbar/Rightbar';
import Feedbar from '../components/feed/Feedbar';

const Home = () => {
  return (
    <>
    <div><Topbar/></div>
    <div className="homeContainer">
<Sidebar/>
<Feedbar/>
<Rightbar/>
    </div>
    </>
  )
}

export default Home