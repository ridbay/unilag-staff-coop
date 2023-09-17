import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  handleChange?: () => void;
}

const Backdrop: React.FC<ModalProps> = ({ children, handleChange }) => {
  return (
    <div
      className={`fixed inset-5 z-10 overflow-hidden flex items-center justify-center`}
      onClick={handleChange}
    >
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className={`modal bg-[#000000b9] w-[80vh] h-[80vh] rounded-[2rem] flex items-center justify-center transition duration-[2s] ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ children, handleChange }) => {
  return (
    <Backdrop handleChange={handleChange}>
      <div className="bg-white">{children}</div>
    </Backdrop>
  );
};

export default Modal;
