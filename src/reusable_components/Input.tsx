type InputProps = {
  labelName: string;
  inputType: string;
  inputPlaceholder: string;
  inputName?: string;
  inputValue: string;
  isValidated?: boolean | null;
  validationMessage: string;
  handleChange?: (value: string, name: string) => void;
  handleOnBlur?: () => void;
  isDisable?: boolean;
};

const Input = ({
  labelName,
  inputType,
  inputPlaceholder,
  inputName,
  inputValue,
  isValidated,
  validationMessage,
  handleChange,
  handleOnBlur,
  isDisable = false,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full mt-3">
        <label className="text-[14px] text-mainFont font-bold ml-1">
          {labelName}
        </label>
        <p className="text-[14px] font-bold text-primary mr-1">
          {validationMessage}
        </p>
      </div>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value, e.target.name)}
        onBlur={handleOnBlur}
        className={`w-[300px] h-[40px] mt-1 pl-4 border-[3px] rounded-lg border-primary focus:outline-none text-mainFont font-semibold text-[14px] placeholder:text-[14px] placeholder:text-gray-400 placeholder:font-semibold`}
        disabled={isDisable}
      />
    </div>
  );
};

export default Input;
