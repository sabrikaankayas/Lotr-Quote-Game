import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Quiz from './components/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Quiz></Quiz>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

