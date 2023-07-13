import './Blog2.css';
import myImage from '../../images/thumb_article40.jpg';
import { Link } from 'react-router-dom';

function Blog2(props) {
    return (           
              <div>
               <Link to={`/BloguserView/${props.blogid}`}style={{ textDecoration: 'none', color: 'white' }}>
               <div class="card mb-3">
               <div class="row g-0">
               <div class="col-md-4">
                    <img src={myImage} class="img-fluid rounded-start" alt="..."/>
                    <h7></h7>
               </div>
               <div class="col-md-8">
                    <div class="card-body" style={{textAlign:"left"}}>
                    <h5 class="card-title">{props.blogtitle}</h5>
                    <p class="card-text">{props.minidescription}</p>
                    <p class="card-text"><small class="text-muted">{props.blogtitleDescription}</small></p>
                    </div>
               </div>
               </div>
               </div>
               </Link>
               </div>
      );
  }
  
  export default Blog2;
  