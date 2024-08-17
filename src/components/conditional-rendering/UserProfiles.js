import SingleUser from "./SingleUser"
export default function UserProfiles(){

    const users = [
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
    ]

    return (
        <div className="user-profiles-container">
            <h1 className="usr-profiles-title">User Profiles</h1>
            {users.map((user) => (
                <SingleUser 
                key={user.id}
                userFirstName={user.userFirstName}
                userLastName={user.userLastName}
                userFavouriteFood={user.userFavouriteFood}
                userDOB={user.userDOB}
                />
            ))}
        </div>

    )
}