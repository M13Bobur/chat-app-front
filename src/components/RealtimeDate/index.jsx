import moment from "moment";
import { useState, useEffect } from "react";
import { DateContent, Day, Hour } from "./style";
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <DateContent>
      <Hour>{moment(new Date(date)).format("HH:mm")}</Hour>
      <Day>{moment(new Date(date)).format("DD-MM-YYYY")}</Day>
    </DateContent>
  );
}
export default Clock;
