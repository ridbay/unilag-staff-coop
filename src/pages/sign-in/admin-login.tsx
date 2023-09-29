import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import MainLogo from "../../../public/imgs/main-logo.png"
import UnilagLogo from "../../../public/imgs/unilag-logo.jpg"
import TextField from "@mui/material/TextField"



const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminLogin, setAdminLogin] = useState({email: "", password: ""})

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  let router = useRouter()
  const {loginWithEmailAndPassword} = useAuth()

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async(e:any) => {
    e.preventDefault()
    try {
      await loginWithEmailAndPassword(adminLogin.email, adminLogin.password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-[85vh]">
      <div className="flex justify-center flex-col h-full gap-4 items-center">
        <div className="flex gap-3">
          <Image
            src={MainLogo}
            alt="Unilag staff coop logo"
            className="w-[8rem] h-[8rem]"
          />
          <Image
            src={UnilagLogo}
            alt="Unilag logo"
            className="w-[8rem] h-[8rem]"
          />
        </div>
        <div className="mb-3">
          <h1 className="text-[2rem]">Admin Login</h1>
        </div>
        <div className="flex flex-col gap-4 w-[92%] md:w-[50%] lg:w-[30%]">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={adminLogin.email}
            onChange={(e) => setAdminLogin({...adminLogin, email: e.target.value})}
            required
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={adminLogin.password}
              onChange={(e) => setAdminLogin({...adminLogin, password: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <input
            type="submit"
            onClick={handleLogin}
            value="Sign In"
            className="bg-theme-color transition-all text-[18px] hover:bg-white hover:text-theme-color hover:border-2 hover:border-theme-color duration-500 ease-in-out text-white py-4 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;