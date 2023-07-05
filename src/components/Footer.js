import { copyright, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          // const { id, href, icon } = link
          return (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              itemClass="footer-icon"
            />
            // <li key={id}>
            //   <a
            //     href={href}
            //     target="_blank"
            //     rel="noreferrer"
            //     className="footer-icon"
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>
          )
        })}
      </ul>
      {copyright.map((link) => {
        const { id, title, subTitle } = link
        const year = new Date().getFullYear()
        return (
          <p className="copyright" key={id}>
            {title}
            <span id="date">{year} </span>
            {subTitle}
          </p>
        )
      })}
    </footer>
  )
}
