import {
    createBrowserRouter,
    redirect
} from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/auth/AuthLayout";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import AdminPage from "../pages/admin/AdminPage";
// import UserProfilePage from "../pages/user/UserProfilePage";
import ErrorPage from "../pages/ErrorPage";
import AdminSignInPage from "../pages/auth/AdminSignInPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";

import { getAuth } from "../services/auth";
import AppointmentHistoryPage from "../pages/AppointmentHistoryPage";
import AppointmentDetailPage from "../pages/AppointmentDetailPage";
import ProfilePage from "../pages/ProfilePage";

const authLoader = async () => {
    console.log('auth redirect');
    try{
        const isAuthenticated = await getAuth()
        return null;
    }catch(err){
        return redirect("/auth/sign-in");
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <LandingPage />,
            },
            {
                path: "/serviceDetail/:id",
                element: <ServiceDetailPage />
            },
            // {
            //     path: "serviceDetail/:id",
            //     element: <ProductDetailPage />
            // },
            // {
            //     path: "products",
            //     element: <ProductsPage />
            // },
            // {
            //     path: "productDetail/:id",
            //     element: <ProductDetailPage />
            // },
            // {
            //     path: "cart",
            //     element: <Cart />,
            //     // loader: authLoader
            // },
            {
                path: "appointments",
                element: <AppointmentHistoryPage />,
            },
            {
                path: "/appointmentDetail/:id",
                element: <AppointmentDetailPage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            }
            // {
            //     path: "ordersuccess/:id",
            //     element: <OrderSuccessPage />
            // },
            // {
            //     path: "admin-home",
            //     element: <AdminPage />
            // },
            // {
            //     path: "userprofile",
            //     element: <UserProfilePage />,
            //     loader: authLoader
            // }
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-in',
                element: <SignInPage />
            },
            {
                path: 'sign-up',
                element: <SignUpPage />
            },
            {
                path: 'admin',
                element: <AdminSignInPage />
            }
        ]
    },
    {
        path: 'admin',
        element: <DefaultLayout />,
        children: [
            {
                path: 'home',
                element: <AdminPage /> 
            }
        ]
    }
]);

export default router
