import myImage from '../../images/thumb_article40.jpg';
import '../userIT21174780/Blog4.css';
import { Link } from 'react-router-dom';

function Blog4(props) {
    return (
        
            <div class="col-3">
                <Link to={`/BloguserView/${props.blogid}`}style={{ textDecoration: 'none', color: 'white' }}>
                <div className="card" style={{height:"70vh"}}>
                <img src={props.myImage} class="card-img" alt={props.myImage}/>
                <p class=" card-text">{props.blogtitleDescription}</p>
                <div class="card-body" style={{textAlign:"left"}}>
                    <h5 class="card-title">{props.blogtitle}</h5>
                    <p class="card-text">{props.minidescription}</p>
                </div>
                </div>
                </Link>  
            </div>
         
            
    );
  }

export default Blog4;