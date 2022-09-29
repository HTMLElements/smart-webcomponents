import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Dashboard from '../../Pages/Applications/Dashboard/Dashboard';
import Dashboard2 from '../../Pages/Applications/Dashboard2/Dashboard2';
import Dashboard3 from "../../Pages/Applications/Dashboard3/Dashboard3";
import Dashboard1 from "../../Pages/Applications/Dashboard1/Dashboard1";
import EcommerceDashboard from "../../Pages/Ecommerce/EcommerceDashboard/EcommerceDashboard";
import Clients from "../../Pages/Ecommerce/Clients/Clients";
import Details from "../../Pages/Ecommerce/Details/Details";
import List from "../../Pages/Ecommerce/List/List";
import Checkout from "../../Pages/Ecommerce/Checkout/Checkout";
import AnalyticsDashboard from "../../Pages/Analytics/Dashboard/AnalyticsDashboard";
import ProjectsList1 from "../../Pages/Projects/ProjectsList1/ProjectsList1";
import ProjectsList2 from "../../Pages/Projects/ProjectsList2/ProjectsList2";
import ProjectsDetail from "../../Pages/Projects/ProjectsDetail/ProjectsDetail";
import CryptoDashboard from "../../Pages/Crypto/Dashboard/CryptoDashboard";
import Overview1 from "../../Pages/Profile/Overview1/Overview1";
import Overview2 from "../../Pages/Profile/Overview2/Overview2";
import UsersList from "../../Pages/Profile/UsersList/UsersList";
import SocialPage from "../../Pages/Profile/SocialPage/SocialPage";
import AccountSettings from "../../Pages/Profile/AccountSettings/AccountSettings";
import KanbanTasks1 from "../../Pages/Kanban/KanbanTasks1/KanbanTasks1";
import KanbanTasks2 from "../../Pages/Kanban/KanbanTasks2/KanbanTasks2";
import Chat from "../../Pages/Chat/Chat";
import Inbox from "../../Pages/Inbox/Inbox";
import SignIn from "../../Pages/Pages/SignIn/SignIn";
import SignUp from "../../Pages/Pages/SignUp/SignUp";
import ResetPassword from "../../Pages/Pages/ResetPassword/ResetPassword";
import Invoice from "../../Pages/Pages/Invoice/Invoice";
import Pricing from "../../Pages/Pages/Pricing/Pricing";
import FourOFour from "../../Pages/Pages/FourOFour/FourOFour";
import FiveOO from "../../Pages/Pages/FiveOO/FiveOO";
import KnowledgeBase from "../../Pages/Pages/KnowledgeBase/KnowledgeBase";
import Blank from "../../Pages/Pages/Blank/Blank";
import Introduction from "../../Pages/Documentation/Introduction/Introduction";
import GettingStarted from "../../Pages/Documentation/GettingStarted/GettingStarted";
import Plugins from "../../Pages/Documentation/Plugins/Plugins";
import Changelog from "../../Pages/Documentation/Changelog/Changelog";
import Toasts from "../../Pages/UIElements/Toasts/Toasts";
import Buttons from "../../Pages/UIElements/Buttons/Buttons";
import Cards from "../../Pages/UIElements/Cards/Cards";
import Carousel from "../../Pages/UIElements/Carousel/Carousel";
import EmbedVideo from "../../Pages/UIElements/EmbedVideo/EmbedVideo";
import General from "../../Pages/UIElements/General/General";
import GridLayout from "../../Pages/UIElements/GridLayout/GridLayout";
import Modals from "../../Pages/UIElements/Modals/Modals";
import Tabs from "../../Pages/UIElements/Tabs/Tabs";
import Typography from "../../Pages/UIElements/Typography/Typography";
import FontAwesome from "../../Pages/Icons/FontAwesome/FontAwesome";
import Feather from "../../Pages/Icons/Feather/Feather";
import FormLayouts from "../../Pages/Form/FormLayouts/FormLayouts";
import FormBasicInputs from "../../Pages/Form/FormBasicInputs/FormBasicInputs";
import FormInputGroups from "../../Pages/Form/FormInputGroups/FormInputGroups";
import Tables from "../../Pages/Tables/Tables";
import AdvancedInputs from "../../Pages/FormPlugins/AdvancedInputs/AdvancedInputs";
import Editor from "../../Pages/FormPlugins/Editor/Editor";
import Validation from "../../Pages/FormPlugins/Validation/Validation";
import Wizard from "../../Pages/FormPlugins/Wizard/Wizard";
import ResponsiveTable from "../../Pages/DataTables/ResponsiveTable/ResponsiveTable";
import TableWithButtons from "../../Pages/DataTables/TableWithButtons/TableWithButtons";
import ColumnSearch from "../../Pages/DataTables/ColumnSearch/ColumnSearch";
import MultiSelection from "../../Pages/DataTables/MultiSelection/MultiSelection";
import AjaxData from "../../Pages/DataTables/AjaxData/AjaxData";
import Charts from "../../Pages/Charts/Charts";
import Notifications from "../../Pages/Notification/Notifications";
import GoogleMaps from "../../Pages/Maps/GoogleMaps/GoogleMaps";
import Scheduler from "../../Pages/Scheduler/Scheduler";

function RoutesList({ openTodayMenu }) {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Dashboard openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/dashboard-2" element={<Dashboard2 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/dashboard-3" element={<Dashboard3 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/dashboard-1" element={<Dashboard1 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/e-commerce" element={<EcommerceDashboard openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/clients" element={<Clients openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/e-commerce-details" element={<Details />}></Route>
                <Route path="/e-commerce-list" element={<List />}></Route>
                <Route path="/e-commerce-checkout" element={<Checkout />}></Route>
                <Route path="/analytics" element={<AnalyticsDashboard openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/projects-list-1" element={<ProjectsList1 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/projects-list-2" element={<ProjectsList2 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/detail" element={<ProjectsDetail openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/crypto" element={<CryptoDashboard openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/profile-1" element={<Overview1 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/profile-2" element={<Overview2 openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/users-list" element={<UsersList openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/social" element={<SocialPage openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/settings" element={<AccountSettings openTodayMenu={openTodayMenu} />}></Route>
                <Route path="/tasks" element={<KanbanTasks1 />}></Route>
                <Route path="/tasks-2" element={<KanbanTasks2 />}></Route>
                <Route path="/chat" element={<Chat />}></Route>
                <Route path="/inbox" element={<Inbox />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/reset-password" element={<ResetPassword />}></Route>
                <Route path="/invoice" element={<Invoice />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/404" element={<FourOFour />}></Route>
                <Route path="/500" element={<FiveOO />}></Route>
                <Route path="/knowledge-base" element={<KnowledgeBase />}></Route>
                <Route path="/blank" element={<Blank />}></Route>
                <Route path="/introduction" element={<Introduction />}></Route>
                <Route path="/getting-started" element={<GettingStarted />}></Route>
                <Route path="/plugins" element={<Plugins />}></Route>
                <Route path="/changelog" element={<Changelog />}></Route>
                <Route path="/toasts" element={<Toasts />}></Route>
                <Route path="/buttons" element={<Buttons />}></Route>
                <Route path="/cards" element={<Cards />}></Route>
                <Route path="/carousel" element={<Carousel />}></Route>
                <Route path="/embed-video" element={<EmbedVideo />}></Route>
                <Route path="/general" element={<General />}></Route>
                <Route path="/grid-layout" element={<GridLayout />}></Route>
                <Route path="/modals" element={<Modals />}></Route>
                <Route path="/tabs" element={<Tabs />}></Route>
                <Route path="/typography" element={<Typography />}></Route>
                <Route path="/font-awesome" element={<FontAwesome />}></Route>
                <Route path="/feather" element={<Feather />}></Route>
                <Route path="/layouts" element={<FormLayouts />}></Route>
                <Route path="/basic-inputs" element={<FormBasicInputs />}></Route>
                <Route path="/input-groups" element={<FormInputGroups />}></Route>
                <Route path="/tables" element={<Tables />}></Route>
                <Route path="/advanced-inputs" element={<AdvancedInputs />}></Route>
                <Route path="/editor" element={<Editor />}></Route>
                <Route path="/validation" element={<Validation />}></Route>
                <Route path="/wizard" element={<Wizard />}></Route>
                <Route path="/responsive-table" element={<ResponsiveTable />}></Route>
                <Route path="/table-with-buttons" element={<TableWithButtons />}></Route>
                <Route path="/column-search" element={<ColumnSearch />}></Route>
                <Route path="/multi-selection" element={<MultiSelection />}></Route>
                <Route path="/ajax-data" element={<AjaxData />}></Route>
                <Route path="/charts" element={<Charts />}></Route>
                <Route path="/notifications" element={<Notifications />}></Route>
                <Route path="/google-maps" element={<GoogleMaps />}></Route>
                <Route path="/scheduler" element={<Scheduler />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesList