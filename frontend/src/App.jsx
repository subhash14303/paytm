import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUp from "./components/signup/singup"
import SignIn from "./components/signin/singin"
function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/signup" element={<SingUp />}/>
        <Route path="/signin" element={<SignIn />}/>  
      </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
