import React from 'react'
import "../styles/home.css"

import { BsStarHalf } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BsWindowDock, BsGlobe2 } from "react-icons/bs";
const WorkFlow = () => {
  return (
    <div  className="workflow" >
        <div className="workflow_item" >
          <div className="icons_div">
            <div className="icons">
              <BsStarHalf className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="workflow_item">
          <div className="icons_div">
            <div className="icons">
              <BsWindowDock className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="workflow_item" >
          <div className="icons_div">
            <div className="icons">
              <BsGlobe2 className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="workflow_item" >
          <div className="icons_div">
            <div className="icons">
              <GiBrain className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="workflow_item">
          <div className="icons_div">
            <div className="icons">
              <BiLike className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="workflow_item" >
          <div className="icons_div">
            <div className="icons">
              <FiSettings className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
      </div>
  )
}

export default WorkFlow