import "./App.css";
import User from "./components/components-lesson/User";
import UserList from "./components/components-lesson/UserList";
import SingleUser from "./components/conditional-rendering/SingleUser";
import UserProfiles from "./components/conditional-rendering/UserProfiles";
import HookComponent from "./components/customHooks/HookComponent";
import ListOfItems from "./components/lists-props/ListOfItems";
import SingleUserState from "./components/state/SingleUserState";
import UserProfilesListState from "./components/state/UserProfilesListState";
import EffectFetchData from "./components/useeffect/EffectFetchData";
import EffectsNoDependency from "./components/useeffect/EffectNoDep";
import EffectsDemoTwoStates from "./components/useeffect/EffectNoDepTwoState";
import EffectsDemoInfiniteLoop from "./components/useeffect/EffectTwoEffectsInfinite";
import EffectCleanUpParent from "./components/useeffect/cleanup/EffectCleanUpParent";
import UseMemoExpensive from "./components/usememo/UseMemoExpensive";
import UseRefBasic from "./components/useref/UseRefBasic";
import UseRefMutableVals from "./components/useref/UseRefMutVal";
import UseRefState from "./components/useref/UseRefState";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/reactRouter/pages/Home";
import About from "./components/reactRouter/pages/About";
import Contact from "./components/reactRouter/pages/Contact";
import Users from "./components/reactRouter/pages/Users";
import Dashboard from "./components/reactRouter/pages/nested/Dashboard";
import Profile from "./components/reactRouter/pages/nested/Profile";
import Settings from "./components/reactRouter/pages/nested/Settings";
import NavigateLogin from "./components/reactRouter/pages/NavigateLogin";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Components */}
        {/* <User /> */}
        {/* <UserList/> */}

        {/* Lists and Props */}
        {/* <ListOfItems /> */}

        {/* Conditional Rendering */}
        {/* <SingleUser/> */}
        {/* <UserProfiles /> */}

        {/* State */}
        {/* <SingleUserState/> */}
        {/* <UserProfilesListState/> */}

        {/* UseEffect */}
        {/* <EffectsNoDependency/> */}
        {/* <EffectsDemoTwoStates/> */}
        {/* <EffectsDemoInfiniteLoop /> */}
        {/* <EffectCleanUpParent/> */}
        {/* <EffectFetchData/> */}

        {/* UseRef */}
        {/* <UseRefBasic /> */}
        {/* <UseRefMutableVals/> */}
        {/* <UseRefState /> */}

        {/* UseMemo */}
        {/* <UseMemoExpensive/> */}

        {/* <HookComponent /> */}
        <nav
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "10px",
          paddingLeft: "20px"
        }}
        >
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Users">Users</Link>
          <Link to="/Dashboard">Dashboard</Link>

        </nav>
        <Routes>
          <Route path="/" element={<NavigateLogin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Users/:id" element={<Users />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
