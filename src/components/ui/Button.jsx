import "./button.scss";

const Button = ({ variant }) => {
  return (
    <>
      <button className={`btn btn-${variant}`}>Button</button>
    </>
  );
};

export default Button;
