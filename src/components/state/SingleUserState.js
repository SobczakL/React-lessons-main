
export default function SingleUserState({userFirstName, userLastName, userFavouriteFood, userDOB}){
    
    return userFirstName ? (
        <div className="user-container">
            <p className="user-info">{userFirstName == "Cindy" ? "That's Cindy" : `First Name: ${userFirstName}`}</p>
            {userLastName && <p className="user-info">Last Name: {userLastName}</p>}
            {userFavouriteFood && <p className="user-info">Fav Food: {userFavouriteFood}</p>}
            {userDOB && <p className="user-info">DOB: {userDOB}</p>}
        </div> 
    ) : (
        <div className="user-container no-user">
            <p>No user data available</p>
        </div> 
    )
}