export const CustomButton = ({ children, text, onButtonCLick }) => {
  return (
    <button
      onClick={() => onButtonCLick(text)}
      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
    >
      {children ?? "Click Me!"}
    </button>
  );
};
