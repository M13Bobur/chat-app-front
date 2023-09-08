export const groupHeaders = (categories = []) => {
  const parentCategories = categories.filter((item) => !item.parent);
  return parentCategories?.map((item, ind) => {
    return {
      id: ind + 4,
      Header: item?.title,
      accessor: item._id,
      show: true,
      width: 200,
      align: 'center',
      border: true,
      pl: 30,
      type: 'info',
      expanded: true,
    };
  });
};
