import React from 'react';
import Header from '../../components/shared/Header';
import PostForm from '../../components/posts/forms/PostForm';

// MUI
import Container from '@mui/material/Container';

const NewPost = () => {
  return (
    <>
      <Header title="New Post" />
      <Container maxWidth="lg">
        <PostForm />
      </Container>
    </>
  );
};

export default NewPost;
