import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"

import './index.css'
import router from './routes/router';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='320892808308-97jn4eq9d3k93887lrimlk96mkb39l1p.apps.googleusercontent.com'>
    <StrictMode>
      <RouterProvider
      router={router} />
    </StrictMode>
  </GoogleOAuthProvider>
)
