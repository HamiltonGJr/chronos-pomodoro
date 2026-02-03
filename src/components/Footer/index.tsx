import styles from './styles.module.css';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href=''>Entenda a técnica Pomodoro 🍅</a>
        <a href=''>
          Chronos Pomodoro &copy; {new Date().getFullYear()} | Feito por
          Hamilton Gonçalves com muito 💚
        </a>
      </footer>
    </>
  );
}

export { Footer };
