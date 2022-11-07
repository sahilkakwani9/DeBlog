import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Dashboard from "../components/Dashboard"
import BlogPage from "./BlogPage";
const Layout = () => {
    return (
        <div className="flex flex-row">
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/blog/:id' element={<BlogPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Layout