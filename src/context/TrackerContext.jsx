import { createContext, useState, useContext } from "react";

const TrackerContext = createContext();

export function TrackerProvider({ children }) {
  const [log, setLog] = useState([]);
  const [user, setUser] = useState({ name: "John Doe" });

  const addItem = (item) => {
    setLog((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setLog((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TrackerContext.Provider value={{ log, addItem, removeItem, user, setUser }}>
      {children}
    </TrackerContext.Provider>
  );
}

export function useTracker() {
  return useContext(TrackerContext);
}