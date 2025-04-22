import { createContext, useContext, useState } from "react";

const BookingContext = createContext({
  lawyers: [],
  setLawyers: () => {},
});

const BookingProvider = ({ children }) => {
  const bookedLawyers = JSON.parse(localStorage.getItem("lawyers")) || [];

  const [lawyers, setLawyers] = useState(bookedLawyers);

  return (
    <BookingContext.Provider value={{ lawyers, setLawyers }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useAppointment = () => {
  return useContext(BookingContext);
};

export default BookingProvider;
