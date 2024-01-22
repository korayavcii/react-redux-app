import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login,reset } from "../features/auth/authSlice";
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner";

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=> state.auth)
   
  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const { email, parola } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData={
      email,parola
    }

    dispatch(login(userData))
  };

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset)

  },[user,isError,isSuccess,message,navigate,dispatch])

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Giriş Yapalım</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Emailinizi Giriniz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="parola"
              name="parola"
              type="password"
              value={parola}
              placeholder="Parolanızı Giriniz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lock" type="submit">
              Giriş
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
