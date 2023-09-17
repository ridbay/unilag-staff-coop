import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
}

const Backdrop: React.FC<ModalProps> = ({ children, isOpen }) => {
  return (
    <div className={` ${
        isOpen ? "opacity-60" : "opacity-0"
      } pointer-events-none fixed inset-5 z-10 overflow-hidden flex items-center justify-center`}>
      <div
        className={`modal bg-[#000000] w-[80vh] h-[80vh] rounded-[2rem] flex items-center justify-center transition duration-[2s] ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  return (
    <Backdrop isOpen={isOpen}>
      <div className="bg-white">{children}</div>
    </Backdrop>
  );
};

export default Modal;
