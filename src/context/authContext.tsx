import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import React, { useContext, useState, useEffect } from "react";
import members from "../data/members.json";
import { useRouter } from "next/router";
import { ToastMessages } from "@/components/toastMessages";
import { db } from "../lib/firebase";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

type ValueProp = {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  MemberSignIn: (pass_no: string, password: number | string) => void;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  membersData: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean
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
  const [membersData, setMembersData] = useState<any>([])
  const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleFetchDocs = async() => {
      try {
         const docRef = collection(db, "members");
         const docSnap = await getDocs(docRef);
         docSnap.forEach((res) => {
           setMembersData(res.data()?.data);
           console.log(res.data());
         });
      } catch (error) {
        ToastMessages("Network error", true)
      }
      
    }

    useEffect(() => {
     handleFetchDocs()
    },[])

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/home")
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const MemberSignIn = (pass_no: string, password: string | number) => {
      const user = membersData.find((user: any) => {
        console.log(user)
      const emailFound = pass_no.toLowerCase() == user.NAME.toLowerCase();
      const isPasswordCorrect =
        password == user["ID "];
        console.log(password, user["ID "])
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
    <AuthContext.Provider
      value={{
        loginWithEmailAndPassword,
        MemberSignIn,
        currentUser,
        setCurrentUser,
        membersData,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthService;

export const useAuth = () => {
  return useContext(AuthContext);
};
