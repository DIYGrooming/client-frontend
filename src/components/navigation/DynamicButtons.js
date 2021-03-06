import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//material ui
import Button from '@mui/material/Button';

import { StyledBtn } from '../shared/StyledButtons';

// State Managers
import { useDispatch } from 'react-redux';
// To decode the token
import decode from 'jwt-decode';
//login User logic for rendering
const DynamicButtons = () => {
  const dispatch = useDispatch();
  //const location = useLocation();
  const navigate = useNavigate();

  // Get the User
  const user = useSelector((state) => {
    return (
      state.authReducer.authData ?? JSON.parse(localStorage.getItem('profile'))
    );
  });

  // eslint-disable-next-line
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  useEffect(() => {
    const token = user?.token;

    // The logic to log out after a certain time.
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 5000 < new Date().getTime()) {
        logout();
      }
    }
  }, [user, logout]);
  //Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {user?.result?.username ? (
        <>
          <Button href="/profile" variant="container">
            Profile
          </Button>
          <Button href="/posts/new" variant="container">
            Create a Post
          </Button>
          <Button
            href="/"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            variant="container"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          {isMobile ? (
            <Button />
          ) : (
            <StyledBtn href="/login" variant="container">
              Login
            </StyledBtn>
          )}
        </>
      )}
    </>
  );
};
export default DynamicButtons;
