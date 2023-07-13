import './Blog1.css';
import myImage from '../../images/thumb_article40.jpg';
import { Link } from 'react-router-dom';




function Blog1(props) {

    // const filteredBlogs4 = props.filteredBlogs4.slice(0, 3);
    const filteredBlogs4 = props.filteredBlogs4.slice(0, 3).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).reverse();

  
    const blogCards = filteredBlogs4.map(blog => (
      <Link to={`/BloguserView/${blog._id}`} style={{ textDecoration: 'none', color: 'white' }}>
      <div className="card bg-dark text position-relative" key={blog._id}  style={{height:'110.5vh'}}>
       <img className="card-img" src={myImage} alt="Card image cap" style={{opacity: 0.5}} />
        <div className="card-img-overlay"  style={{padding:"30px"}}>
        <div class="position-absolute bottom-0 start-0 m-10  p-5 text-white" style={{textAlign:"left",}}>
          <p>{blog.titleDescription}</p>
          <h5 className="card-title" style={{ fontWeight: 'bold',fontSize:'5vh' }}>{blog.title}</h5>
           <p class="card-text">{blog.minidescription}</p>
        </div>  
        </div>
      </div>
      </Link>
    ));
  
    return (
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
  
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          {filteredBlogs4.map((blog, index) => (
            <button type="button" data-bs-target="#demo" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} key={blog._id}></button>
          ))}
        </div>
  
        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          {filteredBlogs4.map((blog, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={blog._id}>
              {blogCards[index]}
            </div>
          ))}
        </div>
  
        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
  
      </div>
    );
  }
  
  export default Blog1;
  