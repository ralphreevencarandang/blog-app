import HomePage from "./pages/HomePage"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogsPage";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={ <HomePage/>}/>
          <Route path="/blogs" element={ <BlogPage/>}/>
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
