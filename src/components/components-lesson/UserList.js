import User from "./User";

const users = [
  {
    userImage: "/images/userImage.jpeg",
    userName: "reactUser001",
  },
  {
    userImage: "/images/userImage.jpeg",
    userName: "iheartReact",
  },
  {
    userImage: "/images/userImage.jpeg",
    userName: "reactfun",
  },
];

export default function UserList() {
  return (
    <>
      {users.map((user, index) => {
        console.table(user.userName, index);
        return (
          <User
            key={index}
            userImage={user.userImage}
            userName={user.userName}
          />
        );
      })}
    </>
  );
}
