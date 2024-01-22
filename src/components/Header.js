import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Yapılacaklar</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <span>Merhaba {user.displayName}</span>
            </li>
            <li>
              <button onClick={onLogOut} className="btn">
                <FaSignOutAlt /> Çıkış
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Giriş
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Üye Ol
    
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
