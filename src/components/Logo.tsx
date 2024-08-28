import logoImag from "../assets/images/dress_smart_logo.svg";
type LogoProps = {
  styleName: string;
};

const Logo = ({ styleName }: LogoProps): JSX.Element => {
  return (
    <>
      <img src={logoImag} alt="logo_img" className={`${styleName}`}></img>
    </>
  );
};

export default Logo;
