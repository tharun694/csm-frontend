import './App.css';
import { Route, Routes } from "react-router-dom";
import Form from './Form';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Form />} />
            
    </Routes>
  );
}

export default App
