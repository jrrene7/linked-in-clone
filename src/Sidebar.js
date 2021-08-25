import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => {
      return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
      )
    };

    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Jean-Robert Rene Jr</h2>
            <h2>jrrene7@Gmail.com</h2>
          </div>

          <div className="sidebar__stats">
            <div className="sidebar__stat">
              <p>Who viewed you</p>
              <p className="sidebar__statNumber">2,718</p>
            </div>

            <div className="sidebar__stat">
              <p>Views on post</p>
              <p className="sidebar__statNumber">3,777</p>
            </div>
          </div>

          <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("programming")}
            {recentItem('softwareengineering')}
            {recentItem('developer')}
            {recentItem('reactjs')}
            {recentItem('photography')}
          </div>
        </div>
    )
}

export default Sidebar
