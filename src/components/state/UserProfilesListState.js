import SingleUserState from "./SingleUserState";
import { useState } from "react";

export default function UserProfilesListState() {
  const [users, setUsers] = useState([
    {
      id: 1,
      userFirstName: null,
      userLastName: null,
      userFavouriteFood: null,
      userDOB: null,
    },
    {
      id: 2,
      userFirstName: "Renald",
      userLastName: "Smith",
      userFavouriteFood: "Pizza",
      userDOB: "May 20th 1990",
    },
    {
      id: 3,
      userFirstName: "Cindy",
      userLastName: "Carlington",
      userFavouriteFood: "Pasta",
      userDOB: "Jan 14th 1960",
    },
  ]);

  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [userFavouriteFood, setUserFavouriteFood] = useState("")
  const [userDOB, setUserDOB] = useState("")

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
        id: users.length + 1,
        userFirstName: userFirstName,
        userLastName: userLastName,
        userFavouriteFood: userFavouriteFood,
        userDOB: userDOB
    }
    setUsers([...users, newUser])
    setUserFirstName('')
    setUserLastName('')
    setUserFavouriteFood('')
    setUserDOB('')

    console.log(users)

  };

  console.log(userFirstName);

  return (
    <div className="user-profiles-container">
      <h1 className="usr-profiles-title">User Profiles</h1>
      <form onSubmit={addUser}>
        <label htmlFor="firstName">FN</label>
        <input id="firstName" type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}/> <br />
        <label htmlFor="lastName">LN</label>
        <input id="lastName" type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)}/> <br />
        <label htmlFor="favouriteFood">FF</label>
        <input id="favouriteFood" type="text" value={userFavouriteFood} onChange={(e) => setUserFavouriteFood(e.target.value)}/> <br />
        <label htmlFor="dob">DOB</label>
        <input id="dob" type="date" value={userDOB} onChange={(e) => setUserDOB(e.target.value)}/>
        <button type="submit">Add User</button>
      </form>
      {users.map((user) => (
        <SingleUserState
          key={user.id}
          userFirstName={user.userFirstName}
          userLastName={user.userLastName}
          userFavouriteFood={user.userFavouriteFood}
          userDOB={user.userDOB}
        />
      ))}
    </div>
  );
}
