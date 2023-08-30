import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';



// PAGE IMPORTS
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectGallaryPage from './pages/ProjectGallaryPage/ProjectGallaryPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import ContactMePage from './pages/ContactMePage/ContactMePage';
import Thanks from './pages/ContactMePage/Thanks';

// LAYOUT IMPORTS
import NavBar from './components/shared/navBar/NavBar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/"  element={ <LandingPage /> } />
      <Route path='/'  element={ <NavBar /> }> //Nav bar and footer that is used in all other pages
        <Route path='guiliafrati' element={<HomePage />} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='/projects/:project' element={<ProjectGallaryPage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/contact' element={<ContactMePage />} />
        <Route path='/thanks' element={<Thanks />} />
      </Route>
    </Route>
  )
 )

function App() {
  return (
    <RouterProvider router={router}>
      <LandingPage />
    </RouterProvider>
  );
}

export default App;
