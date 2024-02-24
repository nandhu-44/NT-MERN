import React from 'react'

function FooterLink(props) {
  return (
    <li className="text-white mr-5 hover:cursor-pointer hover:underline">{props?.text ?? "Link"}</li>
  )
}

export default FooterLink;