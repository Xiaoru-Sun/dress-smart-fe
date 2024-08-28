type buttonProps = {
  children: string;
  styleName: string;
  handleClick: () => void;
};

const Button = ({ children, styleName, handleClick }: buttonProps) => {
  return (
    <button className={`${styleName}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
