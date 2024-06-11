import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  //Tue Jun 11 2024 17:31:07 GMT+0530 (India Standard Time)

  // Function to get the number of days in a month
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  // 31
  // console.log(daysInMonth(6, 2024))

  // Function to get the day of the week of the first day of the month
  const startDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  // 1
  // console.log(startDayOfMonth(6, 2024))

  // Array of month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to render the days of the current month
  const renderDays = () => {
    // Get the number of days in the current month and the start day
    const numDays = daysInMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear()
    );
    const startDay = startDayOfMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear()
    );
    console.log(startDay);

    // Array to store the day elements
    const days = [];
    // Loop through each day of the month
    for (let i = 1; i <= numDays + startDay; i++) {
      // If the current day is within the month, add a day element
      if (i > startDay) {
        days.push(
          <div key={i} className="day">
            {i - startDay}
          </div>
        );
      } else {
        // If the current day is before the start of the month, add an empty div
        days.push(<div key={i} className="empty"></div>);
      }
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        {/* Button to navigate to the previous month */}
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          &lt;
        </button>
        {/* Display the current month and year */}
        <div>
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        {/* Button to navigate to the next month */}
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          &gt;
        </button>
      </div>
      {/* Display weekdays */}
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      {/* Render the days of the month */}
      <div className="days">{renderDays()}</div>
    </div>
  );
}

export default App;
