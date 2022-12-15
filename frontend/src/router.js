import ServicesPage from "./pages/Services/ServicesPage";
import MarketMainPage from "./pages/MarketMainPage/MarketMainPage";
import TravelMainPage from "./pages/TravelMainPage/TravelMainPage";

import { MARKET_MAIN_ROUTE, SERVICES_ROUTE, TRAVEL_MAIN_PAGE } from "./utils/consts";

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
        path: TRAVEL_MAIN_PAGE,
        Component: TravelMainPage
    }
]