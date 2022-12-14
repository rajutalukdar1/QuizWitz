import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QusPage from './components/QusPage/QusPage';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        { path: 'blog', element: <Blog></Blog> },

        {
          path: '/abouts/:aboutsId',
          loader: async ({ params }) => {
            // console.log(params.aboutsId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.aboutsId}`)

          },
          element: <QusPage></QusPage>
        },

      ]
    },
    { path: '*', element: <ErrorPage></ErrorPage> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
