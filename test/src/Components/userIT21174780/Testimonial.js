import './Testimonial.css';
import myImage from '../../images/Mills_Rebeka.jpg';
function Testimonial() {
    return (
            
                <div class="card mb-4" >
                <div class="row g-0">
                <div class="col-md-2">
                <img src={myImage} class="rounded-circle" alt="Sample image"></img>
                </div>

                <div class="col-md-10">
                    <div class="card-body ">
                    <h7 class="card-title">Card title</h7>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <p class="text-muted" >@istighfaryuk__</p>
                    </div>
                </div>

                </div>
               </div>

            )
    }
export default Testimonial;