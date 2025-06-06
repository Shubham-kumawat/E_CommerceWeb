import React from 'react'

function About() {
    return (
        <div
        id='about'
        
        className="w-full h-[42vw] bg-gray-100 flex items-center justify-center  text-center">
  <div>
    <div className="text-[2.5em] font-semibold ">
      <h1>About</h1>
    </div>
    <div className="para mt-5">
      <p className="text-[1.8em]  leading-[1.7em]">
        <span>
          I'm a paragraph. Click here to add your own text and edit <br /> me.
          It’s easy. Just click “Edit Text” or double click me to <br /> add
          your own content and make changes to the font. I’m a <br /> great
          place for you to tell a story and let your users know a <br /> little
          more about you.
        </span>
      </p>
    </div>
  </div>
</div>

    )
}

export default About