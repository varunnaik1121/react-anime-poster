import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './comps/Layout';
import Animes from './comps/Animes';
import SingleAnimePage from './comps/SingleAnimePage';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Animes />
      </Layout>
    ),
  },
  {
    path: '/:id',
    element: (
      <Layout>
        <SingleAnimePage />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
