import { FaGithub } from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';

export function SingInButton() {

  const isUserLoggedIn = true;

  return isUserLoggedIn ? (

    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      joaonetrs
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (

    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sigin in with GitHub
    </button>

  )
}