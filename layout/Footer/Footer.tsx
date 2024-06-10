import cn from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import GitHubIcon from '../icons/icons8-github.svg';
import LinkedInIcon from '../icons/icons8-linkedin.svg';
import TelegramIcon from '../icons/icons8-telegram.svg';
import TelIcon from '../icons/tel.svg';
import MailIcon from '../icons/mail.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.outsidenav}>
            <a href="https://github.com/ValentynYurchenko" target="blunk">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/valentyn-yurchenko-995243277/"
              target="blunk"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://web.telegram.org/k/#@ValentynYurchenko"
              target="blunk"
            >
              <TelegramIcon />
            </a>
          </div>
          <a href="mailto:valentin.urchenko@gmail.com" target="_blank">
            <MailIcon className={styles.svg} /> valentin.urchenko@gmail.com
          </a>
          <a href="tel:+380683055810" target="_blank">
            <TelIcon className={styles.svg} /> +38-068-305-58-10
          </a>
        </div>
      </div>
    </footer>
  );
};
