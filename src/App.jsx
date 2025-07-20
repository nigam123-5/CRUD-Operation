import Create from './components/create';
import Read from './components/Read';
import Update from './components/Update';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
