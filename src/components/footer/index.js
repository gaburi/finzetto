import { Component } from "./styles";
import contact from '../../data/contact.json';

export function Footer() {
  return (
    <Component>

      <div className="content">
        <div></div>
        <div></div>
        <div className="flex-center">
          <ul className="contact">
            <li>
              <a href={contact.map} rel="noreferrer" target="_blank" title='Localização'>
                <i class="fa fa-map-marker fa-4x"></i>{contact.location}</a>
            </li>

            <li>
              <a href={`tel:+55${contact.phone}`} rel="noreferrer" target="_blank" title='Telefone'>
                <i class="fa fa-phone fa-4x"></i>{contact.phone}</a>
            </li>
            <li></li>
          </ul>
          <ul className="social">
            <li><a href={contact.linkedin} rel="noreferrer" target="_blank" title='LinkedIn'>
              <i class="fa fa-linkedin fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.instagram} rel="noreferrer" target="_blank" title='Instagram'>
              <i class="fa fa-instagram fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.whatsapp} rel="noreferrer" target="_blank" title='whatsapp'>
              <i class="fa fa-whatsapp fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.certifacation} rel="noreferrer" target="_blank" title='Certificações'>
              <i class="fa fa-certificate fa-4x icon-3d"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright by <span>Gabriel Oliveira</span></p>
      </div>
    </Component>
  )
}