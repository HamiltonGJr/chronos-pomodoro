import styles from './Heading.module.css';

function Heading(props) {
  return (
    <>
      <h1 className={`${styles.heading} ${styles.cyan}`}>{props.children}</h1>
    </>
  );
}

export { Heading };
