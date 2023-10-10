import SidebarItem from "../../SideBarItem"
import items from "../../sidebar.json"
import React from "react"


export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}