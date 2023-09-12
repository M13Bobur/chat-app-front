import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Title, Wrapper, IconContainer, TitleItem } from './style';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/modules/sidebar/actions';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { AiTwotonePushpin } from 'react-icons/ai';

const Item = ({ open, title, path, elements = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const isActive = (checkPath) => location.pathname === checkPath;
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    dispatch(setSearch(''));
    if (location.pathname === '/') {
      navigate(path, { replace: true });
    } else {
      navigate(path, { replace: true });
    }
  };

  return (
    <Wrapper>
      <Container
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        active={
          elements.length &&
          location.pathname.split('/').includes(path.slice(1))
            ? isActive(location.pathname)
            : isActive(path)
        }
        hovered={hovered}
        onClick={() => handleNavigate(path)}
        title={title}
      >
        <Container.Left>
          <IconContainer
            active={
              elements.length &&
              location.pathname.split('/').includes(path.slice(1))
                ? isActive(location.pathname)
                : isActive(path)
            }
            hovered={hovered}
          >
            <Avatar
              // style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
              size={45}
            />
          </IconContainer>
          <TitleItem>
            {!open && (
              <Title hovered={hovered} active={isActive(path)}>
                {title}
              </Title>
            )}
            {!open && (
              <p>
                {<IoCheckmarkOutline size={15} /> ?? (
                  <IoCheckmarkDoneOutline size={15} />
                )}{' '}
                {'Hello World'.length >= 27
                  ? 'HelloWorld'.slice(0, 27) + '...'
                  : 'HelloWorld'}
              </p>
            )}
          </TitleItem>
        </Container.Left>
        {!open && (
          <Container.Right>
            <div className='rightTime'>10:00</div>
            <div className='rightSection'>
              <Container.Right.ItemNotification>
                10
              </Container.Right.ItemNotification>
              <p>
                <AiTwotonePushpin color='#787486' />
              </p>
            </div>
          </Container.Right>
        )}
      </Container>
    </Wrapper>
  );
};

export default Item;
