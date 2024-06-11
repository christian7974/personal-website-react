import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from "./pages/Home";
import AboutMePage from './pages/AboutMe';
import ProjectPage from './pages/Projects';
import NotFound from './pages/NotFound';
import './App.css';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/about', element: <AboutMePage />},
  {path: '/projects', element: <ProjectPage />},
  {path: '*', element: <NotFound />}
]);

function App() {
  return (
    <div className='bg-periwinkle pt-3 h-screen text-night'>
      <RouterProvider router={router} />
    </div>);
}

export default App;
