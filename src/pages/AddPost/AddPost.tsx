import React from 'react';
import { CreatePost } from '../../App/components';
import styles from './AddPost.module.scss';

const AddPost = () => {
  return (
    <div className={styles.root}>
      <CreatePost />
    </div>
  );
};

export {AddPost};