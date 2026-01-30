import styles from './styles.module.css';

function CountDown() {
  return (
    <>
      <div className={`${styles.container} ${styles.cyan}`}>00:00</div>
    </>
  );
}

export { CountDown };
