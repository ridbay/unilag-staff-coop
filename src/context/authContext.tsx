import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import React, { useContext, useState } from "react";
import members from "../data/members.json";
import { useRouter } from "next/router";
import { ToastMessages } from "@/components/toastMessages";

type ValueProp = {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  MemberSignIn: (pass_no: string, password: string) => void;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type User = {
  email: string;
  phonebook_no: string;
  firstname: string;
  lastname: string;
  account_no: string;
  bank: string;
  dividend_year: string;
  share_dividend: string;
  "non-share_dividend": string;
  total_divivdend: string;
  id: string;
};

const AuthContext = React.createContext({} as ValueProp);

const AuthService = ({ children }: any) => {

  const [currentUser, setCurrentUser] = useState<User | null>(null)

    const router = useRouter()

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/home")
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const MemberSignIn = (pass_no: string, password: string) => {
    const user = members.find((user) => {
      const emailFound = pass_no === user.phonebook_no;
      const isPasswordCorrect =
        password.toLowerCase() === user.lastname.toLowerCase();
      const userFound = emailFound && isPasswordCorrect;
      return userFound;
    });
    if (user) {
      setCurrentUser(user);
      ToastMessages("Successfully Signed In", false)
      router.push("/members/home")
      // throw new Error("Invalid email or password");
    }else {
      ToastMessages("Incorrect Login credentials", true)
    }
  };
  return (
    <AuthContext.Provider value={{ loginWithEmailAndPassword, MemberSignIn, currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthService;

export const useAuth = () => {
  return useContext(AuthContext);
};
