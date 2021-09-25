import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Gallery.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Gallery</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Gallery,
};
