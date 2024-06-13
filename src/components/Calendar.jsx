import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = [];

  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const isToday = (date) => {
    return date.getDate() === currentDate.getDate() &&
           date.getMonth() === currentDate.getMonth() &&
           date.getFullYear() === currentDate.getFullYear();
  };

  return (
    <div className="p-4 size-1/2">
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((date) => (
          <div 
            key={date.toDateString()} 
            className={`p-2 text-center ${isToday(date) ? 'font-bold bg-primary text-white rounded-xl' : 'text-black'}`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
