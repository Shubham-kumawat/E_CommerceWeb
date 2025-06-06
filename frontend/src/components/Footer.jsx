import React from 'react'

function Footer() {
  return (
    <div className='footer bg-black w-full h-[39vw] '>
      <div className='footer-items  h-[16vw]  flex items-center justify-center gap-40 text-[1.06em] font-semibold bg-black text-white'>
        <div className='items-block-one lg:h-[13vw] mt-10 space-y-2' >
          <div>
            <a href="">
              <span>Shopping & Returns</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>Store Policies</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>Payment Methods</span>
            </a>

          </div>
        </div>

        <div className='items-block-second h-[13vw] mt-10 space-y-2' >
          <div>
            <a href="">
              <span>Contact</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>Tel: 123-456-7890</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>info@mysite.com</span>
            </a>

          </div>
        </div>

        <div className='items-block-third h-[13vw] mt-10 space-y-2' >
          <div>
            <a href="">
              <span>Facebook</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>Instagram</span>
            </a>
          </div>

          <div>
            <a href="">
              <span>Pinterest</span>
            </a>

          </div>
        </div>

      </div>
      <div className='footer-form w-full h-[22vw] flex items-center justify-center'>
      <div className='w-[45%]  h-full'>
  
    <div className='text-white text-base'>
      <span>Join our mailing list and never miss an update</span>
    </div>

    <div className='text-[1.1em] font-semibold text-gray-500 mt-10'>
      <h5>Email*</h5>
    </div>

    <div className='input-f  flex items-center gap-6 mt-5 mb-10'> 
      <input 
        type="text"
        name="email"
        id="email"
        
        className="bg-transparent border-b border-white outline-none text-white px-2 py-1 w-[35vw]"
      />
      
      <button
        className="text-[1.1em] w-[16vw] font-semibold border   bg-white text-black px-2 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
      >
        Subscribe Now
      </button>
    </div>
  <div className="flex items-center gap-2 mt-15">
  <input type="checkbox"   className="w-5 h-5 bg-black checked:bg-black checked:border-black border-gray-300 rounded"/>
  <span className="text-base font-semibold text-white">Yes, subscribe me to your newsletter.*</span>
</div>


</div>

      </div>
      <div className='copyright h-[3vw] text-center px-2 py-2 bg-gray-600 w-full h-10 font-semibold text-lg tracking-[0.07em]'>
        <span>© 2035 by Tote. Powered and secured by <span>
          <a href="">
            Wix</a></span></span>
      </div>
    </div>
  )
}

export default Footer