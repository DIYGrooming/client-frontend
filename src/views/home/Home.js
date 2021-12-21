import React, { useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import Header from '../../components/layout/Header';

import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';

// UserContext
import { UserContext } from '../../context/UserContext';

// MUI
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

function Home() {
  const dispatch = useDispatch();

  const { currentId } = useContext(UserContext);

  // fetch & load all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <Header title="Find tips and tricks to groom your beloved pets" />
      <Container maxWidth="lg">
        <h3>Searchbar</h3>
        <h3>Featured Posts</h3>
        <Posts />
      </Container>
    </>
  );
}

export default Home;
