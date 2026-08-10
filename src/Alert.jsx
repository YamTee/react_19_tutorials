export const Alert = ({ children, toast = "success" }) => {
  return (
    <div
      style={{
        backgroundColor: toast === "success" ? "#10b981" : "#ef4444",
        color: "black",
        padding: "19px",
        borderRadius: "10px",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
};
