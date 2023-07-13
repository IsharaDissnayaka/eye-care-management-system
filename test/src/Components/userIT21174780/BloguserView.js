import '../../Components/adminIT21174780/Post/BlogCard.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import myImage from '../../images/thumb_article15.jpg';
import Sidebar from '../adminIT21174780/Sidebar';


// id="exampleModal" 
function FullBlogPost(){

    const { id } = useParams()
    const [title,setTitle]=useState()
    const [titleDescription,setTitleDescription]=useState()
    const [description,setDescription]=useState()
    const [tags,setTags]=useState()
    const [reference,setReference]=useState()
    const navigate = useNavigate()
    console.log(reference)
    
    useEffect(() => {
        getBlogById()
    }, [])

    console.log(id);

    async function getBlogById() {
        await axios.get(`http://localhost:5500/blogs/get/${id}`).then((res) => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setTags(res.data.tags)
            setReference(res.data.reference)
            setTitleDescription(res.data.titleDescription)
            console.log(res.data)
            console.log(res.data.tittle)
        }).catch((error) => {
            alert("Failed to fetch blogs")
        })
    }

    async function handleDelete(id){
        await axios.delete(`http://localhost:5500/blogs/delete/${id}`).then(() => {
            alert("Blog Deleted")
            navigate('/adminIT21174780/Post/Post')
        }).catch((error) => {
            console.log(error)
            alert("Blog not added")
        })
    }
    

    

    return(
            <div>
           <div style={{display: 'flex', justifyContent: 'center'}}>
            <div class="card" style={{maxWidth:'1000px',padding:30}}>
            <div class="col-lg-12">
                <h1 class="text-center">{title}</h1>
                <div class="text-center">
                <img
                    src={myImage}
                    alt="Big Image"
                    class="img-fluid w-75 mx-auto"
                />
                 <p class="text-center">{titleDescription}</p>
                 
                </div>
                <div dangerouslySetInnerHTML={ {__html: description} } />

                <div> Reference: <a href={reference} target="_blank" rel="noreferrer">{reference}</a></div>
                <p class="text-center">{tags}</p>

                    <div class="row align-items-start" style={{marginTop:"30px"}}>
                    <div class="col-8">
                    </div>
                    <div class="col-4">
                        <a href={`/Products`}>
                        <button type="button" class="btn btn-primary">Back To Home</button>
                        </a>
                       
                    </div>
            </div>
            </div>
            </div>
        </div>
        <div class="card-footer">
        </div>

    // </div>
    )
}

export default FullBlogPost;
