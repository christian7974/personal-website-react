import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';

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
    <div className='bg-gradient-to-45 h-screen text-night tall:pt-16 pt-3'>
    <Helmet>
      <title>Christian Tropeano</title>
      <meta name="description"
        content="My name is Christian Tropeano, and this is my personal website showcasing work that I have completed."></meta>
      <meta name="keywords" content="Christian, Tropeano, christiantropeano"></meta>
      <meta name="author" content="Christian Tropeano"></meta>
    </Helmet>
      <RouterProvider router={router} />
    </div>);
}

export default App;
