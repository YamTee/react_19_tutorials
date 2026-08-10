import "./App.css";

function Button({ children, alertOnClick = false, text = "Button Clicked!" }) {
  const handleClick = () => {
    console.log(alertOnClick);

    if (alertOnClick) alert(text);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
    >
      {children ?? "Click Me!"}
    </button>
  );
}

export default Button;
