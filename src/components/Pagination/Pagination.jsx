import './Pagination.scss';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentPageNumber: PropTypes.number,
  lastPageNumber: PropTypes.number,
};

const defaultProps = {
  currentPageNumber: 1,
  lastPageNumber: 9,
};

const Pagination = (props) => {
  return (
    <div>
      {props.currentPageNumber < props.maxPages-2 ? (
          <div className="pagination-container">
            <div onClick={() => props.last(1)}>first</div>
            <div onClick={() => props.last(props.currentPageNumber)}>{props.currentPageNumber}</div>
            <div onClick={() => props.last(props.currentPageNumber + 1)}>{props.currentPageNumber+1}</div>
            <div onClick={() => props.last(props.currentPageNumber + 2)}>{props.currentPageNumber+2}</div>
            <div>...</div>
            <div onClick={() => props.last(props.lastPageNumber)}>last</div>
          </div>
        ) : (
          <div className="pagination-container">
            <div onClick={() => props.last(1)}>first</div>
            <div onClick={() => props.last(props.lastPageNumber-3)}>{props.lastPageNumber-3}</div>
            <div onClick={() => props.last(props.lastPageNumber-2)}>{props.lastPageNumber-2}</div>
            <div onClick={() => props.last(props.lastPageNumber-1)}>{props.lastPageNumber-1}</div>
            <div onClick={() => props.last(props.lastPageNumber)}>{props.lastPageNumber}</div>
            <div onClick={() => props.last(props.lastPageNumber)}>last</div>
          </div>
        )}
    </div>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
