import { createContext, useState, useEffect } from "react";

// Create a context
const AppContext = createContext();

function storedData() {
  const storedVal = localStorage.getItem("myData");
  if (!storedVal)
    return {
      step: "1",
      number_of_ticket: "1",
      ticket_type: "REGULAR",
      email: "",
      fullname: "",
      request: "",
    };

  return JSON.parse(storedVal);
}
// const [data, setData] = useState(() => {
//   return localStorage.getItem("myData") || "";
// });

// Create a provider component
const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(storedData);

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(formData));
  }, [formData, step]);

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
