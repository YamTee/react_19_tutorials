import "./App.css";

import { UserCard } from "./UserCard";

export const UserDetails = (props) => {
  return (
    <div className="card">
      <h1>User Details</h1>
      <UserCard {...props} className="card-body" />
    </div>
  );
};
