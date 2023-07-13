import myImage from '../../images/thumb_article40.jpg';
import { Link } from 'react-router-dom';
function Blog5(props) {

    
    return (
           <Link to={`/BloguserView/${props.blogid}`}style={{ textDecoration: 'none', color: 'white' }}>
            <div class="card bg-dark text-white">
               <img src={myImage} class="card-img" alt="..." style={{opacity: 0.25}} />
                <div class="card-img-overlay">
                    <h5 class="card-title">{props.blogtitle}</h5>
                    <p class="card-text">{props.blogtitleDescription}</p>
                    <p class="card-text">{props.minidescription}</p>
                    {/* <div style={{textAlign:'start',padding:'10px'}} dangerouslySetInnerHTML={ {__html: props.blogdescription.split(' ').splice(0,200).join(' ')}  }/> */}
                </div> 
                </div>
            </Link>    



 // <div>
        //   {filteredBlogs4.slice(0, 1).map((blog, key) => (
        //     <div class="card" key={filteredBlogs4[0]._id}>
        //       <img class="card-img" src={myImage} alt="Card image cap" />
        //       <p>{filteredBlogs4[0].titleDescription}</p>
        //       <div class="card-body">
        //         <h5 class="card-title">{filteredBlogs4[0].title}</h5>
        //         <a href="#" class="btn btn-primary">Read More</a>
        //       </div>
        //     </div>
        //   ))}
        // </div>
            )
    }
export default Blog5;
