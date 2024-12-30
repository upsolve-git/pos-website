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
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Cart from "../pages/CartPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
// import UserProfilePage from "../pages/user/UserProfilePage";
import ErrorPage from "../pages/ErrorPage";
import AdminSignInPage from "../pages/auth/AdminSignInPage";

import { getAuth } from "../services/auth";

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
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "productDetail/:id",
                element: <ProductDetailPage />
            },
            {
                path: "cart",
                element: <Cart />,
                // loader: authLoader
            },
            {
                path: "orders",
                element: <OrderHistoryPage />,
                loader: authLoader
            },
            {
                path: "ordersuccess/:id",
                element: <OrderSuccessPage />
            },
            {
                path: "admin-home",
                element: <AdminPage />
            },
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
]);

export default router
