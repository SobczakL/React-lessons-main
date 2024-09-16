import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
          <h1>Dashboard</h1>
          <nav>
            <ul>
              <li><Link to="profile">Profile</Link></li>
              <li><Link to="settings">Settings</Link></li>
            </ul>
          </nav>
          {/* This is where child components like Profile and Settings will be rendered */}
          <Outlet />
        </div>
      );
}