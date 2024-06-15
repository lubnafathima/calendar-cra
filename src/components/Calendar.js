import React from "react";
import {
  DAY_OF_THE_WEEK,
  CURRENT_DATE,
  CURRENT_MONTH,
  CURRENT_YEAR,
} from "../utils/constants";

export default function Calendar({ month, year }) {
  const getLastDate = (monthValue, yearValue) =>
    new Date(yearValue, monthValue + 1, 0).getDate();

  const firstDateOfAMonth = 1;
  const lastDateOfMonth = getLastDate(month, year);
  const firstDayOfAMonth = new Date(year, month, firstDateOfAMonth).getDay();

  const items = [];

  for (let i = 0; i < firstDayOfAMonth; i++) {
    items.push(<div key={`empty-${i}`} className="calendar_day empty"></div>);
  }

  for (let day = 1; day <= lastDateOfMonth; day++) {
    const isToday =
      day === CURRENT_DATE && month === CURRENT_MONTH && year === CURRENT_YEAR;
    items.push(
      <div key={day} className={`calendar_day ${isToday ? "today" : ""}`}>
        {day}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="calendar_header">
        {DAY_OF_THE_WEEK.map((day, index) => (
          <p key={index} className="day_of_week">
            {day}
          </p>
        ))}
      </div>
      <div className="calendar_main">{items}</div>
    </div>
  );
}
