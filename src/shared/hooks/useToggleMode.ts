import { useEffect, useState } from 'react';

export enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}
export const useToggleMode = () => {
  const [mode, setMode] = useState<Mode>(Mode.LIGHT);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      window.document.documentElement.classList.add('dark');
      setMode(Mode.DARK);
    }
  }, []);

  const toggleMode = () => {
    if (mode === Mode.DARK) {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', Mode.LIGHT);
      setMode(Mode.LIGHT);
    } else {
      localStorage.setItem('theme', Mode.DARK);
      window.document.documentElement.classList.add('dark');
      setMode(Mode.DARK);
    }
  };

  return { mode, toggleMode };
};
