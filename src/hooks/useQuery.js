import React, { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function useQuery({ fetchData }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.langsReducer.language);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [pageSize, setPageSize] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  
  
  
  const statusQuery = useMemo(
    () => (status ? `&status=${status}` : ''),
    [status]
  );

  const categoryQuery = useMemo(
    () => (categoryId ? `&category_id=${categoryId}` : ''),
    [categoryId]
  );
  const subCategoryQuery = useMemo(
    () => (subCategoryId ? `&subcategory_id=${subCategoryId}` : ''),
    [subCategoryId]
  );

  const pageSizeQuery = useMemo(
    () => (pageSize ? `&pageSize=${pageSize}` : ''),
    [pageSize]
  );

  const pageQuery = useMemo(
    () => `page=${search ? 1 : pageIndex + 1}`,
    [pageIndex, search]
  );

  const query = useMemo(
    () =>
      `${pageQuery}${pageSizeQuery}${statusQuery}${categoryQuery}${subCategoryQuery}`,
    [pageQuery, pageSizeQuery, statusQuery, categoryQuery, subCategoryQuery]
  );

  const handleOnTableChange = ({ pageIndex, pageSize }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  useEffect(() => {
    dispatch(
      fetchData({
        lng: language,
        isSearch: true,
        query: `${query}${search ? '&search=' + search : ''}`,
      })
    );
    // eslint-disable-next-line
  }, [dispatch, search, language]);

  useEffect(() => {
    if (pageSize > 0) {
      dispatch(
        fetchData({
          lng: language,
          isSearch: false,
          query: `${query}${search ? `&search=${search}` : ''}`,
        })
      );
    }
    // eslint-disable-next-line
  }, [query, dispatch, language]);

  return {
    query,
    search,
    status,
    pageIndex,
    pageSize,
    categoryId,
    subCategoryId,
    setSearch,
    setStatus,
    setCategoryId,
    setSubCategoryId,
    handleOnTableChange,
  };
}
