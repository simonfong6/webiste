import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      padding: '2px 10px',
      color: 'white',
      borderRadius: 3,
      ...props.style,
    }}
  >
    {props.tooltip}
  </div>
);


export default function SocialIcon(props) {
  return (
    <OverlayTrigger
      placement="top-start"
      delay={{ show: 250, hide: 250 }}
      overlay={renderTooltip(props)}
    >
      <a
        class="btn btn-social-icon"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        <span class={`fa fa-${props.icon} fa-2x`}></span>
      </a>
    </OverlayTrigger>
  )
}
