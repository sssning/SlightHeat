import { createRoot } from 'react-dom/client'
import './assets/css/normalize.scss'
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './assets/css/index.scss'
import 'virtual:svg-icons-register'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
