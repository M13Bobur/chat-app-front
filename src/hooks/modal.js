import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hide, show } from '../redux/modules/modals/actions';

export const useModal = () => useSelector(({ modalReducer }) => modalReducer);

export const useShowModal = () => {
  const dispatch = useDispatch();

  const showBlured = useCallback(
    (props) => {
      dispatch(show({ ...props }));
    },
    [dispatch]
  );

  return { showBlured };
};

export const useHideModal = () => {
  const dispatch = useDispatch();

  const hideModal = useCallback(() => {
    dispatch(hide());
  }, [dispatch]);

  return { hideModal };
};
