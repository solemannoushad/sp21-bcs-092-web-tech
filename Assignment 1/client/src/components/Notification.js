import React from 'react'

export default function Notification(props) {
  return (
    <div className='notificationMain'>
      <p>{props.message}</p>
      {/* <i class='bx bx-x'></i> */}
    </div>
  )
}
