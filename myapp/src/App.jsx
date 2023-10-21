
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Blogs from './component/Blogs';
import Contact from './component/Contact';
import NoPage from './component/NoPage';
import UseMemo from './component/UseMemo';
import Todos from './component/Todos';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path='useMemo' element={<UseMemo/>}/>
        <Route path='/todos' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
