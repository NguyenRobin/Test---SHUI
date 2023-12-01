import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './views/AppLayout';
import MessageBoard from './views/MessageBoard';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: '/', element: <MessageBoard /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
