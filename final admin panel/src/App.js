// import Movie from "./components/movie website/Movie";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/routers/Home/Home"
import Dashboard from "./components/routers/Dashboard/Dashboard";
import Products from "./components/routers/Products/Products";
import New from './components/routers/Products/New'
import Nav from "./components/routers/nav/Nav";
import Footer from "./components/routers/nav/Footer";
import "./components/routers/Service";
import Service from "./components/routers/Service";
import Acc from "./components/routers/Account/Acc";
import { useEffect, useState } from "react";


const RoutesComponent = ({ islogin }) => {
  return (
    <Routes>
      {islogin ? null : <Route path="/" element={<Admin />} />}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/NewProduct" element={<New />} />
      <Route path="/Account" element={<Acc />} />
    </Routes>
  );
};

function App() {
  const [islogin, setIsLogin] = useState(false);

  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("login"));
    setIsLogin(check !== null);
  }, []);

  return (
    <>
      <Service />

      <Nav />

      <RoutesComponent islogin={islogin} />

      <Footer />
    </>
  );
}








































// function App() {


// const [islogin, setIsLogin] = useState(false);

// useEffect(() => {
// let check = JSON.parse(localStorage.getItem("login"));
// setIsLogin(check !== null);
// }, []);


// return (
// <>
{/* <Service /> */ }
{/* {islogin ? <Nav /> : null} */ }




{/* <Routes> */ }
{/* <Route path="/" element={!islogin ? <Admin /> : null} /> */ }

{/* <Route path="/Dashboard" element={<Dashboard />} /> */ }
{/* <Route path="/Products" element={<Products />} /> */ }
{/* <Route path="/NewProduct" element={<New />} /> */ }
{/* <Route path="/Account" element={<Acc />} /> */ }

{/* </Routes> */ }

{/* {islogin ? <Footer /> : null} */ }
{/* </> */ }
// );
// }

export default App;

