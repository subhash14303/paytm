import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUp from "./components/signup/singup"
import SignIn from "./components/signin/singin"
import Dashboard from './components/dashboard components/dashboard';
function App() {

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SingUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
