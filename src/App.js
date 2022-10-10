import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Home Page</div> },
    { path: 'home', element: <div>Home Page</div> },
    { path: 'about', element: <div>About Page</div> },
    { path: 'blog', element: <div>Blog Page</div> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
