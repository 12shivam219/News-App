import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Layout } from './components/LAyout/Layout';

function App() {

  const paths = ["", "/LatestNews", "/India", "/World", "/entertainment", "/business", "/technology", "/health", "/science", "/sports"];
  const children = paths.map((path) => ({
    path,
    element: <HomePage />
  }))

  console.log(children)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: children
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
