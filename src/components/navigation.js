import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
  {
    title: 'Blog',
    path: '/'
  },
  {
    title: 'Web Dev',
    path: '/web-dev'
  },
  {
    title: 'Cloud',
    path: '/cloud'
  },
  {
    title: 'Algorithms',
    path: '/algos'
  },
  {
    title: 'Brain Hacking',
    path: '/health'
  },
  {
    title: 'Login',
    path: '/login'
  },
  {
    title: 'Post Viewer',
    path: '/blog-viewer'
  }
];

export default function Navigation({user}) {
  const [menuActive, setMenuActive] = useState(false);

  return (
  <nav className="site-navigation">
    <span className="menu-title">Aiden's Blog</span>
    <div className={`menu-content-container ${menuActive && 'active'}`} onMouseLeave={() => setMenuActive(!menuActive)} >
      <ul>
        { navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <span className="menu-avatar-container">
        <Avatar src="https://image.flaticon.com/icons/png/512/64/64096.png" size={36}/>
        <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
      </span>
      
    </div>
    <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    
  
  </nav>);
}