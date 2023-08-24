import React from "react";

import styles from "../styles/form.module.css";

const Form = () => {
  const subHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <form className={styles.container} onSubmit={subHandler}>
      <div className={styles.first}>Stay Connected</div>
      <div className={styles.sec}>
        Subscribe to our newsletter - receive all venom related updates
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        className={styles.input}
      />
      <input type="submit" value="Subscribe" className={styles.btn} />
    </form>
  );
};

export default Form;
