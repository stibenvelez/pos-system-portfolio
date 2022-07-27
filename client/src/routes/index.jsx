import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProductPage from "../pages/products/NewProductPage";
import EditProductPage from "../pages/products/EditProductPage";
import ProductsPages from "../pages/products/ProductsPages";
import NewSalePage from "../pages/sales/NewSalePage";
import SalePage from "../pages/sales/SalePage";
import SalesPage from "../pages/sales/SalesPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EmployeesPage from "../pages/employees/EmployeesPage";
import SalesDetailsPage from "../pages/sales/SalesDetailsPage";
import LoginPage from "../pages/login/LoginPage";
import NotFountPage from "../pages/notFountPage/NotFountPage";
import ProfilePage from "../pages/profile/ProfilePage";
import AuthLayout from "../components/layouts/AuthLayout";
import PrivateRoute from "../components/layouts/PrivateRoute";
import SalesReportPage from "../pages/Reports/SalesReportPage";
import ProductPage from "../pages/products/ProductPage";
import EgressesPage from "../pages/egresses/EgressesPage";
import NewEgressPage from "../pages/egresses/NewEgressPage";
import EgressPage from "../pages/egresses/EgressPage";
import { useEffect, useState } from "react";
import UsersPage from "../pages/users/UsersPage";
import UserPage from "../pages/users/UserPage";
import BrandsPage from "../pages/brands/BrandsPage";

const Routers = () => {

    const [isReadyForInstall, setIsReadyForInstall] = useState(false);
    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
            // Prevent the mini-infobar from appearing on mobile.
            event.preventDefault();
            console.log("👍", "beforeinstallprompt", event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container.
            setIsReadyForInstall(true);
        });
    }, []);

    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            // The deferred prompt isn't available.
            console.log("oops, no prompt event guardado en window");
            return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                </Route>

                <Route path="/dashboard/" element={<PrivateRoute />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="sales">
                        <Route index element={<SalesPage />} />
                        <Route path="new-sale" element={<NewSalePage />} />
                        <Route path=":id" element={<SalePage />} />
                        <Route
                            path="SalesDetailsPage"
                            element={<SalesDetailsPage />}
                        />
                    </Route>
                    <Route path="egresses">
                        <Route index element={<EgressesPage />} />
                        <Route path="new-egress" element={<NewEgressPage />} />
                        <Route path=":id" element={<EgressPage />} />
                    </Route>
                    <Route path="products">
                        <Route index element={<ProductsPages />} />
                        <Route
                            path="new-product"
                            element={<NewProductPage />}
                        />
                        <Route path=":id" element={<ProductPage />} />
                        <Route
                            path="edit-product/:id"
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route path="employees">
                        <Route index element={<EmployeesPage />} />
                    </Route>
                    <Route path="reports">
                        <Route
                            path="sales-report"
                            index
                            element={<SalesReportPage />}
                        />
                    </Route>
                    <Route path="profile">
                        <Route path=":id" index element={<ProfilePage />} />
                    </Route>
                    <Route path="users">
                        <Route index element={<UsersPage />} />
                        <Route path="users/:id" element={<UserPage />} />
                    </Route>
                    <Route path="brands">
                        <Route index element={<BrandsPage />} />
                        {/* <Route path="users/:id" element={<UserPage />} /> */}
                    </Route>
                </Route>
                <Route path="*" element={<NotFountPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
