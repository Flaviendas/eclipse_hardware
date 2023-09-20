import React from 'react'
import Sidebar from '../../sidebar'
import  Navbar from  './Navbar'
import Tata from './tata'
import Footer from './footer'



export default function sidebar  ()  {
  return (
    <div className="main">
      <Footer />
        <Tata />

       
       
         <div className="toto"> 
        <Navbar />
          <h1 className="title">Eclipse hardware</h1>
          <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates expedita reprehenderit nemo quisquam corrupti perferendis iste! Dolorum quis architecto neque tenetur asperiores consequatur illo excepturi, commodi numquam officiis dignissimos esse.</p>
          <button className="btn">Explore Now</button>
        </div>
       
     </div> 
  )
}
