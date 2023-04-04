import React from 'react'

const SideBar = () => {
  return (
    
<div className="container-xxl position-relative bg-white d-flex p-0">
<div className="sidebar">
  <nav className="navbar  navbar-light">
    <div className=" ms-4 mb-4">
      <a href className="d-flex align-items-center mx-4">
        <p className>Clean<span>Kigali</span></p>
      </a>
      <hr />
      <div className="navbar-nav w-100">
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2 text-primary" />Home</a>
          <div className="dropdown-menu bg-transparent border-0 " style={{paddingLeft: 30}}>
            <a href="#" className="dropdown-item active"><i className="fa fa-plus-circle me-2 text-primary" />C.Waste Map </a>
            <a href="#" className="dropdown-item"><i className="fa fa-file me-2 text-primary" />C.Waste Activities</a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-calendar me-2 text-primary" />Post Event</a>
          <div className="dropdown-menu bg-transparent border-0" style={{paddingLeft: 30}}>
            <a href="./event/addEvent.php" className="dropdown-item"><i className="fa fa-plus-circle me-2 text-primary" />Add New Event</a>
            <a href="./event/EventList.php" className="dropdown-item"><i className="fa fa-file me-2 text-primary" />Event List</a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-user-circle me-2 text-primary" />Users</a>
          <div className="dropdown-menu bg-transparent border-0" style={{paddingLeft: 10}}>
            <a href="./adduser/adduser.php" className="nav-item nav-link "><i className="fa fa-plus-circle me-2 text-primary" /> Add Users</a>
            <a href="./adduser/listUser.php" className="dropdown-item"><i className="fa fa-file me-2 text-primary" />UserList</a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-image me-2 text-primary" />Gallery</a>
          <div className="dropdown-menu bg-transparent border-0" style={{paddingLeft: 10}}>
            <a href="./gallery/insertGallery.php" className="nav-item nav-link "><i className="fa fa-plus-circle me-2 text-primary" /> Add Gallery</a>
            <a href="./gallery/listOfGallery.php" className="dropdown-item"><i className="fa fa-file me-2 text-primary" />Gallery list</a>
          </div>
        </div>
      </div>
    </div></nav>
</div>
{/* Sidebar End */}
{/* Content Start */}
<div className="content">
  {/* Navbar Start */}
  <nav className="navbar navbar-expand  sticky-top px-2 py-0">
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
      <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
    </a>
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <p>C.Waste Map</p>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src alt style={{width: 40, height: 40}} />
          <span className="d-none d-lg-inline-flex" />
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
          <a href="profile/profile.php" className="dropdown-item">My Profile</a>
          <a href="#" className="dropdown-item">Settings</a>
          <a href="login/signout.php" className="dropdown-item">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-6 col-xl-3">
        <div className="bg-white rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-line fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2"> Total news posted</p>
            <h4 className="mb-0 text-primary" />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-white rounded d-flex align-items-center justify-content-between p-4">
          <div className="ms-3">
            <p className="mb-2">Total event </p>
            <h4 className="mb-0 text-primary" />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-white rounded d-flex align-items-center justify-content-between p-4">
          <div className="ms-3">
            <p className="mb-2"> Total Gallery</p>
            <h4 className="mb-0 text-primary" />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-white rounded d-flex align-items-center justify-content-between p-4">
          <div className="ms-3">
            <p className="mb-2">Total users</p>
            <h4 className="mb-0 text-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default SideBar








