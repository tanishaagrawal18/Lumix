import React from 'react'
import SideNav from './Partials/SideNav.jsx'
import TopNav from './Partials/TopNav.jsx'

function Home() {
  document.title = "Lumix | Home";
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 h-full overflow-x-hidden">
        <TopNav />
        {/* more content */}
      </div>
    </div>
  )
}

export default Home
