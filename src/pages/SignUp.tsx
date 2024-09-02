import { useState } from "react";
import Input from "../reusable_components/Input";
import { useNavigate } from "react-router-dom";
import AccountLink from "../reusable_components/AccountLink";
import { Header } from "../components/Header";
import Button from "../reusable_components/Button";
import Logo from "../components/Logo";

type NewUserInput = {
  userName: string;
  email: string;
  password: string;
};

type RetypePassword = string;

const SignUp = () => {
  const [newUserObj, setNewUserObj] = useState<NewUserInput>({
    userName: "",
    email: "",
    password: "",
  });

  const [retypedPassword, setRetypedPassword] = useState<RetypePassword>("");

  const handleChange = (value: string, name: string) => {
    if (name === "retypePassword") {
      setRetypedPassword(value);
    }
    setNewUserObj((obj: any) => ({ ...obj, [name]: value }));
  };

  const handleButtonClick = () => {
    navigate("/details");
  };

  console.log(retypedPassword);
  const handleOnBlur = () => {};

  // const handleRetypePasswordChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setRetypedPassword(e.target.value);
  // };

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center mt-8">
      <Header />
      {/* <Logo styleName="signUpLogo" /> */}
      <div className="w-[300px] mt-[158px]">
        <p className="ml-1 text-[14px]">Creating an account....</p>
      </div>
      <form className="mt-2">
        <Input
          labelName="Username"
          inputType="text"
          inputPlaceholder="Enter your Username"
          inputName="userName"
          inputValue={newUserObj.userName}
          isValidated={null}
          validationMessage="Invalid userName"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />
        <Input
          labelName="Email"
          inputType="email"
          inputPlaceholder="Enter your email"
          inputName="email"
          inputValue={newUserObj.email}
          isValidated={null}
          validationMessage="Invalid email"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />
        <Input
          labelName="Password"
          inputType="password"
          inputPlaceholder="Enter your password"
          inputName="password"
          inputValue={newUserObj.password}
          isValidated={null}
          validationMessage="Invalid Password"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />

        <Input
          labelName="Retype-password"
          inputType="password"
          inputPlaceholder="Retype your password"
          inputName="retypePassword"
          inputValue={retypedPassword}
          isValidated={null}
          validationMessage="Passwords don't match"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />

        <Button
          styleName="mainButton"
          isDisabled={false}
          handleClick={handleButtonClick}
        >
          Enter
        </Button>
      </form>

      <AccountLink
        message="Already have an account?"
        linkMessage="Sign In"
        navigateTo="sign-in"
      />
    </div>
  );
};

export default SignUp;
