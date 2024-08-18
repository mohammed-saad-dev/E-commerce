import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Product from "./pages/Product.jsx";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "Product",
    element: <Product />,
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element },index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
