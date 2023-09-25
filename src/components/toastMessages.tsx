import toast from "react-hot-toast";

export const ToastMessages = (message: string, isError: boolean) => {
  if (isError) {
    return toast.error(message, {
      duration: 4000,
      style: {
        border: "1px solid red",
        color: "red",
      },
    });
  } else {
    return toast.success(message, {
      duration: 5000,
      style: {
        border: "1px solid #2DAD00",
        color: "#2DAD00",
      },
    });
  }
};
