import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div id='project' className='w-full'>
        <div className='text-center mt-32'>
          <h3 className='text-8xl font-medium font-custom'>RECENT WORK</h3>
          <p style={{fontFamily: 'Afacad, sans-serif', fontSize: '24px'}}>A selected list of recent work</p>
        </div>
        <div className='w-full py-40 lg:mb-40 flex flex-col justify-center items-center'>
            <h3 className='uppercase font-thinCustom text-3xl lg:text-5xl underline underline-offset-8 mb-8'>Will be adding soon</h3>
            <p style={{fontFamily: 'Afacad, sans-serif', fontSize: '20px'}}>Explore all projects by <Link to='https://github.com/Aashishly?tab=repositories' target='blank' className='underline underline-offset-8 decoration-wavy'>clicking here</Link></p>
        </div>
    </div>
  )
}

export default Project