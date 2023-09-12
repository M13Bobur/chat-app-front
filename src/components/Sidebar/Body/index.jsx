import React from 'react';
import { Container, SearchSidebar, SidebarUsers } from './style';
import Item from '../Item';
import { useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';

export const SidebarBody = () => {
  const open = useSelector((state) => state.sidebarReducer.open);
  return (
    <Container open={open}>
      <div>
        {!open && (
          <SearchSidebar>
            <input placeholder='Search...' />
            <div className='icon'>
              <BiSearch color='#787486' size={18} />
            </div>
          </SearchSidebar>
        )}
        {/* {items[role].map(({ title, icon, path, children }, index) => ( */}
        <SidebarUsers>
          {Array.from({ length: 10 }).map((_, index) => (
            <Item
              open={open}
              key={`${index + 1}`}
              title={`User ${index + 1}`}
              path={`/user/${index + 1}`}
            />
          ))}
        </SidebarUsers>
      </div>
    </Container>
  );
};

export default React.memo(SidebarBody);
