import { CustomButton } from "./CustomButton";

export const Product = () => {
  const handleClick = (title) => {
    alert(`Clicked from Product, title: ${title}`);
  };

  return (
    <CustomButton onButtonCLick={handleClick} text="Plan">
      Click Here!!!!
    </CustomButton>
  );
};
