// SignIn.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../reusable_components/Button";
import { Header } from "../components/Header";
import Logo from "../components/Logo";
import Input from "../reusable_components/Input";
import AccountLink from "../reusable_components/AccountLink";

type UserInput = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [userObj, setUserObj] = useState<UserInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (value: string, name: string) => {
    setUserObj((obj: any) => ({ ...obj, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/weather");
  };

  const handleOnBlur = () => {};

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center mt-8">
      <Header />
      <Logo styleName="mediumLogo" />
      <form
        action="submit"
        noValidate
        className="w-[300px] mt-8"
        onSubmit={handleSubmit}
      >
        <Input
          labelName="Email"
          inputType="email"
          inputPlaceholder="Enter your email"
          inputName="email"
          inputValue={userObj.email}
          isValidated={null}
          validationMessage="Invalid Email"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />
        <Input
          labelName="Password"
          inputType="password"
          inputPlaceholder="Enter your password"
          inputName="password"
          inputValue={userObj.password}
          isValidated={null}
          validationMessage="Invalid Password"
          handleChange={handleChange}
          handleOnBlur={() => handleOnBlur()}
        />

        <Button styleName="mainButton" isDisabled={false}>
          Enter
        </Button>
      </form>
      <AccountLink
        message="Don't have an account?"
        linkMessage="Sign Up"
        navigateTo="sign-up"
      />
    </div>
  );
};

export default SignIn;
