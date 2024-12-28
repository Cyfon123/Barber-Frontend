
import Login  from "./components/Login";
import Home from "./components/Home"
import SalonAppointmentForm from "./sections/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 

export default function App() {
  return (
   <>
   <Router>
    <Routes>            
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<SalonAppointmentForm />} />
    </Routes>
    </Router>
 
   
   </>
  )
}