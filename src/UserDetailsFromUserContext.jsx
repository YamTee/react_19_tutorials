import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserDetailsFromUserContext = () => {
  const { user, setUser } = useContext(UserContext);

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      {/* Profile Card */}
      <div className="w-full max-w-sm rounded-xl p-6 shadow-lg text-center">
        {/* Avatar */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
          {user.name
            .split(" ")
            .reduce((prevValue, next) => prevValue + next[0], "")}
        </div>

        {/* Profile Info */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="mt-6 cursor-pointer rounded-lg bg-gray-800 px-5 py-2 text-white transition-colors hover:bg-gray-700"
        >
          Current Theme : {user.theme}
        </button>
      </div>
    </div>
  );
};
