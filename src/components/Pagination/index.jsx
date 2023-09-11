import React from 'react';
import Pagination from 'antd/lib/pagination';

export default ({ getData, totalPages, page, limit }) => {
  const handleChange = (value, pageSize) => {
    getData(value, pageSize);
  };

  return (
    <>
      <Pagination
        pageSize={limit}
        total={totalPages}
        current={page}
        pageSizeOptions={[8, 10, 20, 50, 100]}
        onChange={handleChange}
        showTotal={(total) => `Жами ${total} та`}
      />
    </>
  );
};
