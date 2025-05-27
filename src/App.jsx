import HomePage from "./pages/HomePage"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogsPage";
import CreateBlogPage from "./pages/CreateBlogsPage";
import ViewPostPage from "./pages/ViewPostPage";
import EditPostPage from "./pages/EditPostPage";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={ <HomePage/>}/>
          <Route path="/blogs" element={ <BlogPage/>}/>
          <Route path="/addBlogs" element={ <CreateBlogPage/>}/>
          <Route path="/viewpost/:id" element={ <ViewPostPage/>}/>
          <Route path="/editpost/:id" element={ <EditPostPage/>}/>
        </Route>
        <Route path="*" element={ <NotFoundPage/>}/>
      </>
      
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
