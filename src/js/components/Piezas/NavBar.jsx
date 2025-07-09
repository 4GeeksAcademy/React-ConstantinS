export const NavBar = () => {

  return (


    <nav className="navbar navbar-expand-lg bg-black navbar-black col-md-12">
      <div className="container-fluid text-white d-flex align-items-center">
        <button className="navbar-toggler text-white bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a className="navbar-brand text-warning" href="#">Home</a>
            <li className="nav-item">
              <a className="nav-link active text-warning" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </a>
              <ul className="dropdown-menu dropdown-menu-end bg-warning text-white">
                <li><a className="dropdown-item text-black" href="#">@eMail</a></li>
                <li><a className="dropdown-item text-black" href="#">Phone</a></li>
                <li><a className="dropdown-item text-black" href="#">More info here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )

}