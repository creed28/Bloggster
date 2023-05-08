import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import WritePost from "./pages/WritePost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.scss";

const Layout = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/post/:id",
        element: <SinglePost />
      },
      {
        path:"/write",
        element: <WritePost />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;