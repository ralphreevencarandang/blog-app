import HomePage from "./pages/HomePage"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={ <HomePage/>}/>
        <Route path="*" element={ <NotFoundPage/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
