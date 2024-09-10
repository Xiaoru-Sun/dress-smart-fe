const Modal = ({ children }) => {
  return (
    <div className="absolute w-full h-full flex flex-col items-center bg-white">
      {children}
    </div>
  );
};

export default Modal;
