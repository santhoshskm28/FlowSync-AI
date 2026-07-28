import React, { createContext, useContext, useState, useEffect } from 'react';

const CommandBarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  toggleOpen: () => {},
});

export const CommandBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CommandBarContext.Provider value={{ isOpen, setIsOpen, toggleOpen }}>
      {children}
    </CommandBarContext.Provider>
  );
};

export const useCommandBar = () => useContext(CommandBarContext);
