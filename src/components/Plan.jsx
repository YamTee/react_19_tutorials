import { CustomButton } from "./CustomButton";

export const Plan = () => {
  const handleClick = (title) => {
    alert(`Clicked from Plan, title: ${title}`);
  };

  return (
    <CustomButton onButtonCLick={handleClick} text="Plan">
      Click Here!!!!
    </CustomButton>
  );
};
