import styles from './Heading.module.css';

function Heading() {
  return (
    <>
      <h1 className={`${styles.heading} ${styles.cyan}`}>
        Olá Mundo ! Do Heading !
      </h1>
    </>
  );
}

export { Heading };
