import React from 'react';
import { NavLink } from 'react-router-dom';
import './Headers.css';

const Header = ({}) => (
  <div className="header">
    <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
    <NavLink to="/rackets/devrwoo" className="item" activeClassName="active">Rackets</NavLink>
    <NavLink to="/strings" className="item" activeClassName="active">Strings</NavLink>
    <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
    <NavLink to="/me" className="item" activeClassName="active">마이페이지</NavLink>
    <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
    <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
  </div>
);

export default Header;
