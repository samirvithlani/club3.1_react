import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import { Footer } from "./components/Footer.jsx";
import { MapDemo1 } from "./components/MapDemo1.jsx";
import { MapDemo2 } from "./components/MapDemo2.jsx";
import { MapDemo3 } from "./components/MapDemo3.jsx";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/hotstar/Movies.jsx";
import { Shows } from "./components/hotstar/Shows.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/hotstar/Home.jsx";
import { Error404 } from "./components/Error404.jsx";
import { PLayContent } from "./components/hotstar/PLayContent.jsx";
import { UseStateDemo } from "./components/UseStateDemo.jsx";
import { UseStateDemo2 } from "./components/UseStateDemo2.jsx";
import { UseStateDemo3 } from "./components/UseStateDemo3.jsx";
import { InputDemo1 } from "./components/InputDemo1.jsx";
import { UseMemoDemo1 } from "./components/UseMemoDemo1.jsx";
import { FindBomb } from "./components/FindBomb.jsx";
import { FormDemo1 } from "./form/FormDemo1.jsx";
import { FormDemo2 } from "./form/FormDemo2.jsx";
import { FormDemo3 } from "./form/FormDemo3.jsx";
import { FormDemo4 } from "./form/FormDemo4.jsx";
import { FormDemo5 } from "./form/FormDemo5.jsx";
import { Apidemo1 } from "./components/API/Apidemo1.jsx";
import { ApiDemo2 } from "./components/API/ApiDemo2.jsx";
import { ApiDemo3 } from "./components/API/ApiDemo3.jsx";
import { ApiDemo11 } from "./components/API/ApiDemo11.jsx";
import { MovieDetail } from "./components/API/MovieDetail.jsx";
import { UseEffectDemo } from "./components/UseEffectDemo.jsx";
import { APiDemo5 } from "./components/API/APiDemo5.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import { Apidemo111 } from "./components/API/ApiDemo111.jsx";
import { ApiDemo112 } from "./components/API/ApiDemo112.jsx";
import { UpdateUser } from "./components/API/UpdateUser.jsx";
import { UseRefDemo1 } from "./components/UseRefDemo1.jsx";
import { UseRefDemo2 } from "./components/UseRefDemo2.jsx";
import { UseRefDemo3 } from "./components/UseRefDemo3.jsx";
import { Employee } from "./components/employee/Employee.jsx";
import { ThemeContext } from "./components/ThemeContext.jsx";
//import './App.css'

//component..
function App() {
  const [theme, settheme] = useState("light");

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />

      <ThemeContext.Provider value={{ theme, settheme }}>
        <Navbar></Navbar>
      </ThemeContext.Provider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/shows" element={<Shows />}></Route>
          <Route path="/playing/:id" element={<PLayContent />}></Route>
          <Route path="/useStateDemo" element={<UseStateDemo />}></Route>
          <Route path="/useStateDemo2" element={<UseStateDemo2 />}></Route>
          <Route path="/useStateDemo3" element={<UseStateDemo3 />}></Route>
          <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
          <Route path="/usememo1" element={<UseMemoDemo1 />}></Route>
          <Route path="/findbomb" element={<FindBomb />}></Route>
          <Route path="/formDemo1" element={<FormDemo1 />}></Route>
          <Route path="/formdemo2" element={<FormDemo2 />}></Route>
          <Route path="/formdemo3" element={<FormDemo3 />}></Route>
          <Route path="/formdemo4" element={<FormDemo5 />}></Route>
          <Route path="/apidemo1" element={<Apidemo1 />}></Route>
          <Route path="/apidemo111" element={<ApiDemo112 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
          <Route path="/apidemo5" element={<APiDemo5 />}></Route>
          <Route path="/moviedetail/:id" element={<MovieDetail />}></Route>
          <Route path="/useeffetdemo" element={<UseEffectDemo />}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
          <Route path="/userefdemo1" element={<UseRefDemo1 />}></Route>
          <Route path="/userefdemo2" element={<UseRefDemo3 />}></Route>
          <Route path="/employees" element={<Employee />}></Route>

          {/* <Route path='/*' element = {<h1>404</h1>}></Route> */}
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
