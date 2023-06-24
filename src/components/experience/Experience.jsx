import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React-Native</h4>
              <small className='text-light'>Experienced</small>
              </article>
          </div>

        </div>
        {/*=============================END OF FRONTEND DEVELOPMENT TOOLS========================== */}
        <div className="experience_backend">

        <h3>Backend Development</h3>
          <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>python</h4>
              <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Flask</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MY SQL Server</h4>
              <small className='text-light'>Basic</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Fire Base</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Wordpress</h4>
              <small className='text-light'>Experienced</small>
              </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default experience