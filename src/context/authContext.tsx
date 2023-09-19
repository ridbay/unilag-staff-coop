import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import React, { useContext } from "react";
import { useRouter } from "next/router";

type ValueProp = {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
};

const AuthContext = React.createContext({} as ValueProp);

const AuthService = ({ children }: any) => {

    const router = useRouter()

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/home")
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <AuthContext.Provider value={{ loginWithEmailAndPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthService;

export const useAuth = () => {
  return useContext(AuthContext);
};
