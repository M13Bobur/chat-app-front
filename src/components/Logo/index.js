import React from 'react';
import { HeaderIcon, HeaderTitle, Wrapper } from './style';
import { FiChevronsLeft } from 'react-icons/fi';
import { FiChevronsRight } from 'react-icons/fi';
// import LogoPng from './../../assets/img/colorfilter.png';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/modules/sidebar/actions';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Logo() {
  const open = useSelector((state) => state.sidebarReducer.open);
  const dispatch = useDispatch();
  const handelClickOpen = () => {
    dispatch(setOpen(false));
  };
  const handelClickClose = () => {
    dispatch(setOpen(true));
  };
  return (
    <Wrapper>
      {!open && (
        <HeaderTitle>
          {/* <img src={LogoPng} alt='' width={`80px`} /> */}
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
            size={45}
          />
        </HeaderTitle>
      )}
      {open ? (
        <HeaderIcon onClick={handelClickOpen}>
          <FiChevronsRight size={24} />
        </HeaderIcon>
      ) : (
        <HeaderIcon onClick={handelClickClose}>
          <FiChevronsLeft size={24} />
        </HeaderIcon>
      )}
    </Wrapper>
  );
}

export default Logo;
