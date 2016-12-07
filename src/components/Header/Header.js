import React from "react";
import {IndexLink, Link} from "react-router";
import "./Header.scss";

export const Header = () => (
  <div className="text-center">
    <h1>News reading app</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/feed' activeClassName='route--active'>
      Feed
    </Link>
    {' · '}
    <Link to='/articles' activeClassName='route--active'>
      All Articles
    </Link>
  </div>
)

export default Header
