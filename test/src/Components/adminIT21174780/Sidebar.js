import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                       
                    </li>
                    <li> <Link to='/adminIT21174780/Post/Post' className="nav-link px-0 align-middle">
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Admin Dashbord</span> 
                        </a>
                        </Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                            <Link to='/userView' className="nav-link px-0 align-middle"> <span className="ms-1 d-none d-sm-inline">User View</span></Link>
                            </li>
                            <li>
                            <Link to='/adminIT21174780/Post/AddPost' className="nav-link px-0 align-middle"><a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Blog</span></a></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr/>
            </div>
        </div> 
    );
}

export default Sidebar;