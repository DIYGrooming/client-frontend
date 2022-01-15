import React, { useState, useEffect } from 'react';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../../actions/posts';

// Components & Data
import StepsForm from './StepsForm';
import BaseLayout from '../../shared/BaseLayout';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import DetailsForm from './DetailsForm';

// Context
import { usePostContext } from '../../../context/PostContext';
import { useUserContext } from '../../../context/UserContext';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// {_id, breed, dogSize, username, title, duration, description, steps, image, likes, comments, createdAt}

function PostForm() {
  // Invoke Redux State
  const dispatch = useDispatch();

  // Get the current user for the post's username/author
  const currentUser = JSON.parse(localStorage.getItem('profile'));

  // PostContext consume
  const {
    postData,
    details,
    instructions,
    selectedBreed,
    authorId,
    stepsTempLocal,
    setSelectedBreed,
    clearInputs,
  } = usePostContext();

  // Local states
  const [progress, setProgress] = useState(0);

  // listening to final postData and sends to API
  // !TODO temporary fix, dispatch should be inside handlePostPublish
  useEffect(() => {
    console.log('useEffect\n-- postData:\n', postData);

    // Only CREATE POST when postData is ready
    if (Object.entries(postData).length !== 0) dispatch(createPost(postData));
  }, [postData, dispatch]);

  // Create POST to send to backend
  const handlePostPublish = (e) => {
    e.preventDefault();

    const newPost = {
      ...postData,
      ...details,
      steps: instructions,
      breed: selectedBreed.label,
      authorId: authorId,
    };

    // create post
    dispatch(createPost(newPost));

    // clear inputs back to initial values
    clearInputs();
    // clear temporary local storage for steps
    localStorage.removeItem(stepsTempLocal);
    // set breed back to null
    setSelectedBreed(null);
    console.log('-- New postData Published! --');
  };

  const test = () => {};

  return (
    <>
      <BaseLayout>
        {/* <form onSubmit={handlePostPublish} noValidate> */}
        <form onSubmit={test} noValidate>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={5}>
              <DetailsForm setProgress={setProgress} progress={progress} />
            </Grid>

            <Grid item xs={12} md={7}>
              <StepsForm />
            </Grid>

            <Grid item xs={12} md={12}>
              <Stack spacing={2} direction="row" justifyContent="center">
                {/* <StyledBtnOutlined>Save Draft</StyledBtnOutlined> */}
                <br />
                <StyledBtn type="submit">Publish Post</StyledBtn>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </BaseLayout>
    </>
  );
}

export default PostForm;
