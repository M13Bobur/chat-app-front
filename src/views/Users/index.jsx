import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageContainer, Wrapper } from './style';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { BsClock } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';

export default () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <header>
        <div className='leftSection'>
          <Avatar icon={<UserOutlined />} size={50} />
          <div className='title'>
            User {id}
            <div className='text'>
              <BsClock size={12} />
              <span>last seen today at 9:47</span>
            </div>
          </div>
        </div>
        <div className='rightSection'>
          <div className='icon'>
            <RiErrorWarningLine size={16} />
          </div>
          <div className='icon'>
            <BiDotsVerticalRounded size={16} />
          </div>
        </div>
      </header>
      <main>
        {Array.from({ length: 15 }).map((_, index) => (
          <MessageContainer
            key={index}
            className='message-container'
            leftMsg={index % 2 == 0}
          >
            {index % 2 == 0 && (
              <>
                <div>
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                    size={45}
                  />
                </div>
                <div className='messageLeft'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </>
            )}
            {index % 2 !== 0 && (
              <>
                <div className='messageRight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                    size={45}
                  />
                </div>
              </>
            )}
          </MessageContainer>
        ))}
      </main>
      <footer>
        <input type='text' />
        <button type='button'>
          <FaTelegramPlane size={23} />
        </button>
      </footer>
    </Wrapper>
  );
};
