import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { DatePicker } from 'antd';
import './style.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../../redux/modules/dates/actions';

const { RangePicker } = DatePicker;

export default ({ direction, title, allowClear }) => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);

  const handleChangeDateInput = (_, dateString) => {
    const data = [
      moment(dateString[0]).format('YYYY-MM-DD'),
      moment(dateString[1]).format('YYYY-MM-DD'),
    ];
    dispatch(setSelectedDate(data));
  };
  return (
    <div
      className='ran-wrapper'
      style={{
        flexDirection: direction,
        alignItems: direction && 'flex-start',
      }}
    >
      <div className='range-text'>
        <FiCalendar style={{ fontSize: '18px', marginRight: '10px' }} />
        {title}
      </div>
      <div className='range-datepicker'>
        <RangePicker
          value={[
            selectedDate[0] && moment(selectedDate[0]),
            selectedDate[1] && moment(selectedDate[1]),
          ]}
          allowClear={allowClear}
          format='YYYY-MMM-DD'
          onChange={handleChangeDateInput}
        />
      </div>
    </div>
  );
};
