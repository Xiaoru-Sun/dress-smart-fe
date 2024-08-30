import { useNavigate } from "react-router-dom";

type AccountLinkProps = {
  message: string;
  linkMessage: string;
  navigateTo: string;
};

const AccountLink = ({
  message,
  linkMessage,
  navigateTo,
}: AccountLinkProps) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/${navigateTo}`);
  }

  return (
    <p className="text-[16px] text-mainFont font-semibold mt-4">
      {message}{" "}
      <span className="text-secondary font-bold ml-2" onClick={handleClick}>
        {linkMessage}
      </span>
    </p>
  );
};

export default AccountLink;
