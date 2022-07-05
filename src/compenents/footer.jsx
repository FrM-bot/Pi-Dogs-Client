import React from 'react'

const Footer = () => {
  return (
    <footer className='flex align-center'>
    <div className='flex space-between lg-col w-100 m-1 gap-1'>
        <span>
            Built and Design by <a href="https://frm-bot.xyz/" target="blank" className='link'>Maciel Franco.</a>
        </span>
      <div className='flex gap-1 justify-center'>
        <a href="https://www.linkedin.com/in/franco-maciel/" target="blank" className='link'>Linkedin</a>
        <a href="https://github.com/FrM-bot" target="blank" className='link'>GitHub</a>
        <a href="https://frm-bot.xyz/" target="blank" className='link'>Portfolio</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer