import './App.css';
import User from './components/components-lesson/User';
import UserList from './components/components-lesson/UserList';
import SingleUser from './components/conditional-rendering/SingleUser';
import UserProfiles from './components/conditional-rendering/UserProfiles';
import ListOfItems from './components/lists-props/ListOfItems';
import SingleUserState from './components/state/SingleUserState';
import UserProfilesListState from './components/state/UserProfilesListState';
import EffectFetchData from './components/useeffect/EffectFetchData';
import EffectsNoDependency from './components/useeffect/EffectNoDep';
import EffectsDemoTwoStates from './components/useeffect/EffectNoDepTwoState';
import EffectsDemoInfiniteLoop from './components/useeffect/EffectTwoEffectsInfinite';
import EffectCleanUpParent from './components/useeffect/cleanup/EffectCleanUpParent';

function App() {
  return (
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
    </div>
  );
}

export default App;
