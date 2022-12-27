import ServicesPage from "./pages/Services/ServicesPage";
import MarketMainPage from "./pages/MarketMainPage/MarketMainPage";
import TravelMainPage from "./pages/TravelMainPage/TravelMainPage";
import AuthPage from "./pages/AuthPage/AuthPage";

import { AUTH_ROUTE, CATEGORY_ROUTE, MARKET_MAIN_ROUTE, PRODUCT_DETAIL_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, SERVICES_ROUTE, TRAVEL_MAIN_PAGE_ROUTE } from "./utils/consts";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

export const publicRoutes = [
    {
        path: SERVICES_ROUTE,
        Component: ServicesPage
    },
    {
        path: MARKET_MAIN_ROUTE,
        Component: MarketMainPage
    },
    {
        path: TRAVEL_MAIN_PAGE_ROUTE,
        Component: TravelMainPage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: CATEGORY_ROUTE + "/:category",
        Component: CategoryPage
    },
    {
        path: PRODUCT_DETAIL_ROUTE + "/:product_id",
        Component: ProductDetailPage
    },
]