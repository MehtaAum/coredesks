
const Navbar = () => {
  return (
    <div>
      <div className="navbar w-full h-[60px] fixed bg-[#171717] flex justify-between items-center px-[3%] z-30">
        
        <div className="logo-div w-[14.9%] h-[100%] flex items-center">
          <img src="/src/assets/logo.png" alt=""  className="w-[6vw]"/>
        </div>


        <div className="flex gap-3">
          
              <div className="cursor-pointer hover:scale-[0.9] duration-[0.2s] will-change-transform border-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"/></path><path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
              </div>

              <div className="cursor-pointer hover:scale-[0.9] duration-[0.2s] will-change-transform border-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"/></path></g></svg>
              </div>

              <div className="cursor-pointer hover:scale-[0.9] duration-[0.2s] will-change-transform text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="SVGdEmgndVR"><defs><symbol id="SVGKKfyAcRD"><path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"/></path></symbol></defs><g fill="none" stroke="#fff" stroke-width="2"><path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/><set fill="freeze" attributeName="opacity" begin="0.5s" to="0"/></path><g fill="#fff" stroke="none" opacity="0"><use href="#SVGKKfyAcRD"/><use href="#SVGKKfyAcRD" transform="rotate(60 12 12)"/><use href="#SVGKKfyAcRD" transform="rotate(120 12 12)"/><use href="#SVGKKfyAcRD" transform="rotate(180 12 12)"/><use href="#SVGKKfyAcRD" transform="rotate(240 12 12)"/><use href="#SVGKKfyAcRD" transform="rotate(300 12 12)"/><set fill="freeze" attributeName="opacity" begin="0.5s" to="1"/></g></g><circle cx="12" cy="12" r="3.5"/></mask><rect width="24" height="24" fill="currentColor" mask="url(#SVGdEmgndVR)"/></svg>
              </div>
         
        </div>

      </div>
    </div>
  )
}

export default Navbar
