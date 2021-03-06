import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import { Pagination, PaginationItem } from '@mui/material';
import useStyles from './styles';

// Actions
import { getAllPosts } from '../../actions/posts';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.postsReducer);

  // const { state } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    // Re-render on every page click.
    if (page) {
      dispatch(getAllPosts(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      className={classes.style}
      size="small"
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="secondary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
