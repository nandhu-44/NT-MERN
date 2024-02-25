import React from 'react'
import { Link } from 'react-router-dom';
Link.defaultProps = { to: "/" };

function FooterLink(props) {
  return (
    <li className="text-white hover:cursor-pointer hover:underline">
      <Link to={props.to}>
        {props?.text ?? "Hyperlink"}
      </Link>
    </li>
  )
}

export default FooterLink;