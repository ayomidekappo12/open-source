import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.Location.reload(true);
      })
      .catch(() => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Login to your account!
          </h2>
        </div>
        <div></div>
      </div>
    </>
  );
};
