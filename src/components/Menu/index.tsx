import { useEffect, useState } from 'react';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={`${styles.menu} ${styles.cyan}`}>
        <a className={styles.menuLink} href='#' aria-label='Home' title='Home'>
          <HouseIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Histórico'
          title='Histórico'
        >
          <HistoryIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Tema: Claro | Escuro'
          title='Tema: Claro | Escuro'
          onClick={handleThemeChange}
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
}

export { Menu };
