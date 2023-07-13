import React from 'react';
import myImage from '../../../images/thumb_article15.jpg';
import './BlogCard.css';
import './limitText.css';
import { Link } from 'react-router-dom';

// const LimitedText = ({ text, limit }) => {
//   if (text.length <= limit) {
//     return <p>{text}</p>;
//   } else {
//     const truncatedText = text.slice(0, limit - 3);
//     return (
//       <p>
//         {truncatedText}
//         <strong> See More...</strong>
//       </p>
//     );
//   }
// };

function BlogCard(props) {

  const limit = 100; // set the limit for text display

  return (
    <Link to={`/adminIT21174780/Post/FullBlogPost/${props.blogid}`}style={{ textDecoration: 'none', color: 'white' }}><div>
      <div >{/* blog card */}
        <div class="card" style={{height:"70vh"}}>
          <img src={props.myImage} className="card-img" alt="..." />
          <p class=" card-text">{props.blogtitleDescription}</p>
          
          <div class="card-body"> 
            <h4 class="card-title">{props.blogtitle}</h4>
            <p class=" card-text">{props.blogminidescription}</p>
            
            {/* <p class=" card-text" dangerouslySetInnerHTML={ {__html: props.blogdescription} }/>
            <LimitedText text={props.blogdescription} limit={100} /> */}
          </div>
        </div>
      </div>
    </div>

    
    </Link>
  )
}

export default BlogCard;
