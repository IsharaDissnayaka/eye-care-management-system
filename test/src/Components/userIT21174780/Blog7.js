import myImage from '../../images/thumb_article40.jpg';
import { Link } from 'react-router-dom';

function Blog7(props) {
    return (
          <Link to={`/BloguserView/${props.blogid}`}style={{ textDecoration: 'none', color: 'white' }}>
                <div class="card mb-3" >
                <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body" style={{textAlign:"left"}}>
                    <h5 class="card-title">{props.blogtitle}</h5>
                    <p class="card-text">{props.minidescription}</p>
                    <p class="card-text"><small class="text-muted">{props.blogtitleDescription}</small></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src={props.myImage} class="img-fluid rounded-start" alt="..."/>
                </div>
                </div>
                </div>
            </Link>

            )
    }
export default Blog7;
