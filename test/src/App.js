// import Products from './Components/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminBlog from './Components/AdminBlog'
import AddPost from './Components/adminIT21174780/Post/AddPost';
import UpdatePost from './Components/adminIT21174780/Post/UpdatePost';
import Post from './Components/adminIT21174780/Post/Post';
import FullBlogPost from './Components/adminIT21174780/Post/FullBlogPost';
 import Products from './Components/Products';
 import BloguserView from './Components/userIT21174780/BloguserView';
 import UserView from './Components/UserView';

function App() {
  return (
     <div className='App'>
        <Router>
          <Routes>
            <Route path="/adminIT21174780" exact element={<AdminBlog/>}/>
            <Route path="/adminIT21174780/Post/AddPost" exact element={<AddPost/>} />
            <Route path="/adminIT21174780/Post/UpdatePost/:id" exact element={<UpdatePost/>} />
            <Route path="/adminIT21174780/Post/Post" exact element={<Post/>} />
            <Route path="/adminIT21174780/Post/FullBlogPost/:id" exact element={<FullBlogPost/>} />

            <Route path="/BloguserView/:id" exact element={<BloguserView/>} />
            <Route path="/Products" exact element={<Products/>} />
            <Route path="/userView" exact element={<UserView/>} />

          </Routes>
        </Router>
     </div>
  )
}
export default App;


