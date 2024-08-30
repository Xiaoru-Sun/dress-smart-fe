type buttonProps = {
  children: string;
  styleName: string;
  isDisabled: boolean;
  handleClick?: () => void;
};

const Button = ({
  children,
  styleName,
  isDisabled,
  handleClick,
}: buttonProps): JSX.Element => {
  return (
    <button
      className={`${styleName}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
