import React from "react"
import SidebarItem from "./SideBarItem"
import items from "./sidebar.json"



export default function Sidebar(){
    return (
         <div className="sidebar">
          <div className="burger" onClick={() => openClose()}>
          <img  src="img/menu.svg" alt="burger" />
          </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}