import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Vm from './vms/Vm.jsx'
import Example from './Example.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="Dashboard" subtitle="Home"><Home /></App>,
  }, {
    path: "/nodes",
    element: <App title="Nodes" subtitle="Node Detail"><Vm /></App>,
  }, {
    path: "/vms",
    element: <App title="Virtual Machines" subtitle="VM Detail"><Vm /></App>,
  }, {
    path: "/storages",
    element: <App title="Storage" subtitle="Storage Detail"><Vm /></App>,
  }, {
    path: "/networks",
    element: <App title="Network" subtitle="Network Detail"><Vm /></App>,
  }, {
    path: "/example",
    element: <Example />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
