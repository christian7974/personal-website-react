import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from "./pages/Home";
import AboutMePage from './pages/AboutMe';
import ProjectPage from './pages/Projects';
import './App.css';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/about', element: <AboutMePage />},
  {path: '/projects', element: <ProjectPage />}
]);

function App() {
  return (
    <div className='bg-red-100 pt-3 h-screen'>
      <RouterProvider router={router} />
    </div>);
}

export default App;
