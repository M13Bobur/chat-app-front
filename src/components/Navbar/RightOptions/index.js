import { FiLogOut } from 'react-icons/fi';
import React from 'react';
import UserIcon from '../../Icons/User';
import {
  Action,
  UserProfile,
  LogoutButton,
  Username,
  LogoContainer,
} from '../style';

const Options = ({ user, handleLogout }) => {
  return (
    <Action>
      <UserProfile>
        <Username>{user}</Username>
        <LogoContainer>
          <UserIcon  />
        </LogoContainer>
      </UserProfile>
      <LogoutButton onClick={handleLogout}>
        <FiLogOut size='23' />
      </LogoutButton>
    </Action>
  );
};

export default Options;
