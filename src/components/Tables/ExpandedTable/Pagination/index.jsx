import React from 'react';
import PropTypes from 'prop-types';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Container, PageButtons, Button, ChangeButton } from './style';

import { useButtons } from './useButtons';

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  // pageSize,
  // setPageSize,
  pageIndex,
}) => {
  const buttons = useButtons({ pageCount, pageIndex });

  const handlePageChange = (title) => {
    if (title !== '...') gotoPage(Number(title));
  };

  return (
    <Container>
      <ChangeButton
        color={!canPreviousPage ? '#C4C4C4' : '#080D85'}
        disabled={!canPreviousPage}
        onClick={previousPage}
      >
        {/* <ChevronLeft
          // color={!canPreviousPage ? '#C4C4C4' : '#262626'}
          fontSize="medium"
        /> */}
      </ChangeButton>
      <PageButtons repeat={pageCount > 7 ? 7 : pageCount}>
        {buttons.map((title, index) => (
          <Button
            key={`${index + 1}`}
            onClick={() => handlePageChange(title)}
            // eslint-disable-next-line eqeqeq
            active={pageIndex == title}
          >
            {title !== '...' ? title + 1 : title}
          </Button>
        ))}
      </PageButtons>
      {/* <ChangeButtons> */}

      <ChangeButton
        color={!canNextPage ? '#C4C4C4' : '#080D85'}
        disabled={!canNextPage}
        onClick={nextPage}
      >
        {/* <ChevronRight
          // color={!canPreviousPage ? '#C4C4C4' : '#262626'}
          fontSize="medium"
        /> */}
      </ChangeButton>
      {/* </ChangeButtons> */}
    </Container>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
};
Pagination.defaultProps = {
  pageCount: 40,
};

export default Pagination;
