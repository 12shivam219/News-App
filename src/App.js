import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CommonContainer from './CommonContainer/CommonContainer';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonContainer>
            <HomePage/>
          </CommonContainer>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
