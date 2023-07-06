import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {NavLink} from "react-router-dom";
import {logoutAction} from "../../redux/auth/action";

const Header: React.FC = () => {
    const login = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const onLogoutClick = () => {
        dispatch(logoutAction())
    }
    return (
      <div>
          {
              login.isAuth ? <NavLink onClick={onLogoutClick} to='/'>logout</NavLink> : <NavLink to='/logintest'>login</NavLink>
          }
      </div>
    );
};

export default Header;
