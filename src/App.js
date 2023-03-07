import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CommonContainer from './CommonContainer/CommonContainer';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/LatestNews' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/India' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/World' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/entertainment' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/business' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/technology' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/health' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/science' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

          <Route path='/sports' element={<CommonContainer>
            <HomePage />
          </CommonContainer>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
