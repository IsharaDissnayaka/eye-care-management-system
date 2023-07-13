
import Navbar from './userIT21174780/Navbar';
import Blog from './userIT21174780/Blog';
import Blog1 from './userIT21174780/Blog1';
import Blog2 from './userIT21174780/Blog2';
import Blog4 from './userIT21174780/Blog4';
import Blog5 from './userIT21174780/Blog5';
import Blog7 from './userIT21174780/Blog7';
import Testimonial from './userIT21174780/Testimonial';
import myImage from '../images/thumb_article15.jpg';
import { Link } from "react-router-dom";
import { right } from '@popperjs/core';
import { useEffect, useState } from 'react';
import axios from 'axios';





function Products(){



  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YmU0ODY0MDM3Y2ZlN2YxMWQ4MDY1IiwiaWF0IjoxNjgyNjk1MzAyLCJleHAiOjE2ODI3ODE3MDJ9.lYVAEt0oiDD_0d7-kcBCwrfDMWHrKEMx3N0kkB-g0Kk';
  const headers = { Authorization: `Bearer ${token}` };


 const [blogs, setBlogs] = useState([]);
 const [searchQuery, setSearchQuery] = useState('');

 useEffect(() => {
     getBlogs();
 }, []);

 async function getBlogs() {
     try {
         const res = await axios.get(`http://localhost:5500/blogs`,{ headers });
         setBlogs(res.data);
         console.log(res.data);
     } catch (error) {
         alert("Failed to fetch blogs");
     }
 }

 function handleSearch() {
     if (!Array.isArray(blogs)) {
         return [];
     }
     const filteredBlogs = blogs.filter((blog) => {
         return (
             blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             blog.titleDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
             blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             blog.tags.toLowerCase().includes(searchQuery.toLowerCase())
         );
     });
     return filteredBlogs;
 }

 const filteredBlogs = handleSearch();

 
 const shortenedBlogs = filteredBlogs.slice(0, 6);


 function handleSearch() {
  if (!Array.isArray(blogs)) {
      return [[], []];
  }
  const filteredBlogs1 = blogs.filter((blog) => blog.tags === "1");
  const filteredBlogs2 = blogs.filter((blog) => blog.tags === "2");
  const filteredBlogs3 = blogs.filter((blog) => blog.tags === "3");
  const filteredBlogs4 = blogs.filter((blog) => blog.tags === "4");
  return [filteredBlogs1,filteredBlogs2, filteredBlogs3,filteredBlogs4];
}

const [filteredBlogs1,filteredBlogs2, filteredBlogs3,filteredBlogs4] = handleSearch();


 



    return( 
        <div className="container text-center">

        <div className="row align-items-start">
          {/* <div className="col-12">
          <Navbar></Navbar>
          </div> */}
        </div>

        <div className="row align-items-start">
          <div className="col-12">
          <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                                    <button className="btn btn-success" type="button" onClick={handleSearch}>Search</button>
          </div>
            <Blog></Blog>

          </div>
        </div>
        <div className="row align-items-start  pb-3">
          <h3 className='pb-3' style={{textAlign:'left'}}>Recommend for you</h3>
          <div className="col" style={{minheight: "100vh"}}>
          <div class="row row-cols-1 row-cols-md-3 g-4">
          {filteredBlogs2.map((blog) => ( 
                            <Blog4
                                key={blog._id}
                                blogid={blog._id}
                                blogtitle={blog.title}
                                blogtitleDescription={blog.titleDescription}
                                blogdescription={blog.description}
                                minidescription={blog.minidescription}
                                blogtags={blog.tags}
                                blogreference={blog.reference}
                                myImage={myImage}
                            />
                        ))}
            </div>
          </div>
        </div>

        <div className="row align-items-start pt-5 ">
        <h3 className='pb-3' style={{textAlign:'left'}}>Recently updated</h3>
          <div className="col"  style={{minheight: "100vh"}}>
           <Blog1  filteredBlogs4 = {filteredBlogs4} />         

          </div>
          {/* <div className="col pt-2">
          {filteredBlogs3.map((blog) => ( 
                            <Blog2
                                key={blog._id}
                                blogid={blog._id}
                                blogtitle={blog.title}
                                blogtitleDescription={blog.titleDescription}
                                blogdescription={blog.description}
                                minidescription={blog.minidescription}
                                blogtags={blog.tags}
                                blogreference={blog.reference}
                                myImage={myImage}
                            />
                        ))}
          </div> */}
        </div>


        

        <div className="row align-items-start">
        <h3 className='pb-3 pt-5' style={{textAlign:'left'}}>Technology Updates</h3>
          <div className="col" style={{minheight: "100vh"}}>

          <div className="col pt-2">
          {filteredBlogs3.map((blog) => ( 
                            <Blog2
                                key={blog._id}
                                blogid={blog._id}
                                blogtitle={blog.title}
                                blogtitleDescription={blog.titleDescription}
                                blogdescription={blog.description}
                                minidescription={blog.minidescription}
                                blogtags={blog.tags}
                                blogreference={blog.reference}
                                myImage={myImage}
                            />
                        ))}
          </div>
          </div>
        </div>



        <div className="row align-items-start">
        <h3 className='pb-3 pt-5' style={{textAlign:'left'}}>Industry News</h3>
          <div className="col-8" style={{minheight: "100vh"}}>
          {filteredBlogs4.map((blog) => ( 
                            <Blog7
                                key={blog._id}
                                blogid={blog._id}
                                blogtitle={blog.title}
                                blogtitleDescription={blog.titleDescription}
                                blogdescription={blog.description}
                                minidescription={blog.minidescription}
                                blogtags={blog.tags}
                                blogreference={blog.reference}
                                myImage={myImage}
                            />
                        ))}
          </div>
          <div className="col-4" style={{minheight: "100vh"}}>
            <h5>Testimonial</h5>
            <Testimonial></Testimonial>
          </div>
        </div>


      </div>
           )
}
export default Products;   