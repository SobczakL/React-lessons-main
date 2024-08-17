import UserImage from "./UserImage";
import UserName from "./UserName";

export default function User({ userImage, userName }) {
  return (
    <div className="user">
      <UserImage userImage={userImage} />
      <UserName userName={userName} />
    </div>
  );
}
