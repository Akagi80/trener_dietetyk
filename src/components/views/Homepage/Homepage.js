import React from 'react';
import PropTypes from 'prop-types';
import { Blog } from '../../Common/Blog/Blog';

import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Homepage</h2>
    {children}
    <Blog/>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
};
