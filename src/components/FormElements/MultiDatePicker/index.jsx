import "./style.css";
import DatePicker from "react-datepicker";
import moment from "moment";

function MultiDatePicker({ dates = [], onChange, startDate }) {
  let bar = [];
  dates?.forEach((item) => {
    bar = bar.concat(item?.dates);
  });
  bar = bar?.map((item) => moment(item).format("YYYY-MM-DD"));
  let car = Array.from(new Set(bar)).map((item) =>
    moment(item).format("YYYY-MM-DD")
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => onChange(date)}
      className="input_multi_date_container"
      dateFormat="yyyy-MM-dd"
      maxDate={new Date()}
      dayClassName={(date) => {
        return car?.includes(moment(date)?.format("YYYY-MM-DD"))
          ? "random"
          : undefined;
      }}
      calendarStartDay={1}
      calendarClassName="calendar"
    />
  );
}

export default MultiDatePicker;
