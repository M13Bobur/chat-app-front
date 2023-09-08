import React, { useState } from 'react';
import { useTable } from 'react-table';
import {
  Cell,
  Container,
  Wrapper,
  Table,
  TR,
  TH,
  TBody,
  TD,
  THead,
  TREmpty,
  ChildComponent,
  Content,
  Title,
  Body,
  CloseButton,
  CloseIcon,
  Header,
  Item,
  ItemText,
  RightContainer,
  LeftContainer,
} from './style';
import ExpandButton from './ExpandButton';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Empty } from 'antd';
import { setgroupId } from '../../../redux/modules/application/actions';
import Spinner from '../../../components/Spinner';
import { useLocation } from 'react-router-dom';
import { setModalWork } from '../../../redux/modules/modalwork/actions';

const ChildModal = ({ title, data, setWorksModal, setExpand, loading }) => {
  const dispatch = useDispatch();
  if (loading)
    return (
      <ChildComponent>
        <Content>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={() => setExpand('')}>
              <CloseIcon />
            </CloseButton>
          </Header>
          <Body>
            <Spinner />
          </Body>
        </Content>
      </ChildComponent>
    );

  return (
    <ChildComponent>
      <Content>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={() => setExpand('')}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body>
          {data.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            data.map((item, idx) => (
              <Item key={`${idx + 1}`}>
                <LeftContainer>
                  {item.id} <ItemText>{item.name}</ItemText>
                </LeftContainer>
                <RightContainer>
                  <ItemText>{item.total}</ItemText>
                  <Button
                    style={{
                      background: '#3380FF',
                      borderRadius: '6px',
                      color: '#fff',
                      padding: '0 20px',
                    }}
                    onClick={() => {
                      dispatch(setModalWork(item));
                      setWorksModal(item);
                    }}
                  >
                    Kўриш
                  </Button>
                </RightContainer>
              </Item>
            ))
          )}
        </Body>
      </Content>
    </ChildComponent>
  );
};

const ChildTimeIntervalModal = ({ title, data, setExpand, loading }) => {
  if (loading)
    return (
      <ChildComponent>
        <Content>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={() => setExpand('')}>
              <CloseIcon />
            </CloseButton>
          </Header>
          <Body>
            <Spinner />
          </Body>
        </Content>
      </ChildComponent>
    );

  return (
    <ChildComponent>
      <Content>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={() => setExpand('')}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body>
          {data.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            data.map((item, idx) => (
              <Item key={`${idx + 1}`} timeInterval>
                <LeftContainer>
                  {item.id} <ItemText>{item.name}</ItemText>
                </LeftContainer>
                <RightContainer>
                  <p style={{ textAlign: 'center', margin: '0' }}>
                    {item.count} <br /> марта
                  </p>
                  <p style={{ margin: '0' }}>{item.total}</p>
                </RightContainer>
              </Item>
            ))
          )}
        </Body>
      </Content>
    </ChildComponent>
  );
};
export default React.memo(
  ({
    data = [],
    headers,
    height,
    notCheckable,
    selectgroup,
    loading,
    setWorksModal,
  }) => {
    const [expand, setExpand] = useState('');
    const location = useLocation();

    const dispatch = useDispatch();
    const { groupId, tableIndex, subData, groupTitle } = useSelector(
      (state) => state.appReducer
    );
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
      useTable({
        columns: headers,
        data: data,
      });

    const handleExpand = (value, e) => {
      if (expand !== value) {
        setExpand(value);
      } else {
        setExpand('');
      }
    };
    if (data.length === 0)
      return (
        <h2 style={{ textAlign: 'center', fontSize: '26px', color: '#a8a8a8' }}>
          Танланган вақт кесими бўйича натижалар аниқланмади!
        </h2>
      );

    const handleSelectgroup = (id, userId, value) => {
      if (expand !== value) {
        selectgroup(id, userId);
      }
    };

    const subCompos = {
      ['daily-rating']: (
        <ChildModal
          title={groupTitle}
          data={subData}
          setExpand={setExpand}
          loading={loading}
          setWorksModal={setWorksModal}
        />
      ),
      ['time-interval']: (
        <ChildTimeIntervalModal
          data={subData}
          loading={loading}
          setExpand={setExpand}
          title={groupTitle}
        />
      ),
    };
    const checkSubComponent = (index) => {
      if (expand === groupId && tableIndex === index) {
        return subCompos[location.pathname.substr(1)];
      }
      return null;
    };
    return (
      <Container>
        <Wrapper
          height={height}
          vertical={false}
          ignoreElements='input, .content>span'
        >
          <>
            <Table {...getTableProps()}>
              <THead>
                {headerGroups.map((headerGroup, idx) => (
                  <TR
                    {...headerGroup.getHeaderGroupProps()}
                    notCheckable={notCheckable}
                    key={`${idx + 1}`}
                  >
                    {headerGroup.headers.map((header, index) => (
                      <TH key={`${index + 1}`}>
                        <Cell {...header}>{header.render('Header')}</Cell>
                      </TH>
                    ))}
                  </TR>
                ))}
              </THead>
              <TBody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                  prepareRow(row);
                  return (
                    <React.Fragment key={`${index + 1}`}>
                      <TREmpty />
                      <TR>
                        {row.cells.map((cell, ind) => {
                          const { column } = cell;
                          return (
                            <TD key={`${ind + 1}`} {...column}>
                              <Cell {...column}>
                                {cell.render('Cell')}
                                {column.expanded &&
                                  cell.value?.categoryValue > 0 && (
                                    <ExpandButton
                                      handleExpand={(e) => {
                                        handleExpand(cell.value?.groupId, e);
                                        const payload = {
                                          groupId: cell.value?.groupId,
                                          index,
                                          title: cell.value?.categoryTitle,
                                        };
                                        handleSelectgroup(
                                          cell.value.id,
                                          cell.value.userId,
                                          cell.value.groupId
                                        );
                                        dispatch(setgroupId(payload));
                                      }}
                                      active={expand === cell.value?.groupId}
                                      value={
                                        expand === cell.value?.groupId && true
                                      }
                                    />
                                  )}
                                {cell.value?.categoryValue === null && (
                                  <span
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 'bold',
                                      color: '#a8a8a8',
                                      textAlign: 'center',
                                    }}
                                  >
                                    Фойдаланувчига категория бириктирилмаган
                                  </span>
                                )}
                              </Cell>
                            </TD>
                          );
                        })}
                      </TR>
                      <tr>{checkSubComponent(index)}</tr>
                    </React.Fragment>
                  );
                })}
              </TBody>
            </Table>
          </>
        </Wrapper>
      </Container>
    );
  }
);
