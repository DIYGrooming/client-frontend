import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Container,
  Button,
} from '@mui/material';
// import PetsIcon from '@mui/icons-material/Pets';
import ProGroomer from '../../../components/shared/ProGroomer';
import Header from '../../../components/shared/Header';
import { deleteUser } from '../../../actions/auth';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the User
  const profile = useSelector((state) => {
    return (
      state.authReducer.authData?.result ??
      JSON.parse(localStorage.getItem('profile')).result
    );
  });

  // This will stop the page from loading if there are no users.
  // You can remove it if you want.
  if (!profile?.username) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ marginTop: '10%' }}>
          You are not signed in. Please Sign in so that you can edit your
          Profile.
        </Typography>
      </Container>
    );
  }

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteUser(profile._id));
  };

  return (
    <>
      <Header title="Profile" />
      <Container>
        <Grid style={{ marginBottom: '2rem' }} container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card
              style={{
                marginTop: '4rem',
                marginLeft: '2rem',
                marginRight: '2rem',
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={profile.avatar ?? ''}
                alt="image"
              />
            </Card>
          </Grid>
          <Grid item xs={6} md={8}>
            {/* username details */}
            <Typography
              align="left"
              style={{ marginTop: '4rem' }}
              variant="h3"
              component="div"
            >
              {' '}
              {profile.username}
            </Typography>{' '}
            {/* bagde details */}
            {profile.proGroomer && (
              <ProGroomer />
              // <Typography
              //   align="left"
              //   style={{ marginTop: '1rem' }}
              //   variant="body1"
              //   component="div"
              // >
              //   <PetsIcon />
              //   Professional Groomer
              // </Typography>
            )}
            {/* location details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              Location: {profile.location}
            </Typography>{' '}
            {/* website details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              Website: {profile.website}
            </Typography>{' '}
            {/* socMedia details */}
            <Typography
              align="left"
              style={{ marginTop: '1rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              Social Media: {profile.socMedia}
            </Typography>{' '}
            {/* bio details */}
            <Typography
              align="left"
              style={{ marginTop: '2rem' }}
              variant="body1"
              component="div"
            >
              {' '}
              {profile.bio}
            </Typography>{' '}
          </Grid>
        </Grid>
        <form>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              style={{ marginRight: '20px' }}
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
              href="/profile/edit"
            >
              Edit
            </Button>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Profile;
