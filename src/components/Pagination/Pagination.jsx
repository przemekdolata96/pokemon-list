import './Pagination.scss';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentPageNumber: PropTypes.number,
  lastPageNumber: PropTypes.number,
  last: PropTypes.func.isRequired,
};

const defaultProps = {
  currentPageNumber: 1,
  lastPageNumber: 9,
};

const Pagination = (props) => {
  const paginationItems = [];

  for (let i = 1; i <= props.lastPageNumber; i++) {
    paginationItems.push(
      <div
        key={i}
        className={props.currentPageNumber === i ? 'active' : ''}
        onClick={() => props.last(i)}
        onKeyDown={() => props.last(i)}
        role="button"
        tabIndex={i}
      >
        {i}
      </div>,
    );
  }

  return (
    <div>
      <div className="pagination-container">
        {paginationItems}
      </div>
    </div>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
