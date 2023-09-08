import React from 'react';
import {
  Container,
  Content,
  Header,
  Title,
  CloseButton,
  CloseIcon,
  Body,
} from './style';
import { useModal, useHideModal } from '../../hooks';
import Spinner from '../Spinner';
import { useDispatch } from 'react-redux';
import { clearState } from '../../redux/modules/modalwork/actions';

export default () => {
  const { blured: modal, loading } = useModal();
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(clearState());
    hideModal();
  };
  return (
    <Container show={modal.show}>
      <Content maxWidth={modal.maxWidth}>
        <Header>
          <Title className='noselect'>{modal.title || ''}</Title>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body maxHeight={modal.maxHeight} overflow={modal.overflow}>
          {loading ? (
            <Spinner maxHeight={'100%'} />
          ) : (
            (modal.body && <modal.body />) || 'Body'
          )}
        </Body>
      </Content>
    </Container>
  );
};
