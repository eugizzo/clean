
import React from 'react'
import Logo from '../components/images/logo/download.png'
const Header = (Header) => {
    const logo = {
        color: "white",
        fontFamily: "Arial",
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'clip'
      };
    const nab_brand={
        width: '30px',
    //    marginRight: '1rem'
    }
    const navbar ={
        fontWeight: '600px'
    }

      const [isOpen, setisOpen] = React.useState(false);
    
      function handleClick() {
        setisOpen(!isOpen);
      }
    return (
        <div>
        
    <nav className="flex items-center justify-between flex-wrap bg-[#fafbfd] pt-2 pr-6 pl-6 pb-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6 ml-10">
<a style={nab_brand} href=''>
    <img class="w-sm" src={Logo} alt="react logo" style={logo}/>
    </a>
      <span className="font-Nunito text-[#232323] tracking-tight pl-4">Clean<b>Kigali</b>
      </span>
    </div>
    <div className="block lg:hidden">
      <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-black border-[#232323] hover:text-[#05C605] hover:border-[#05C605]">
      {isOpen && ( <svg className="fill-current texiblue-300 h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      
      )}
      {!isOpen && (
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        )}
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
      
      </div>
      <div className={`lg:flex ${  isOpen ? "md:block" : "hidden" } `}>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#05C605] hover:text-[16px] hover:text-[#05C605] mr-10 duration-300">
      <b>Home</b>
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#abacad] hover:text-[16px] hover:text-[#05C605] mr-10 duration-300">
        Zone
        </a>

        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#abacad] hover:text-[16px] hover:text-[#05C605] mr-10 duration-300">
        Features
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#abacad] hover:text-[16px] hover:text-[#05C605] mr-10 duration-300">
          Download
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#abacad] hover:text-[16px] hover:text-[#05C605] pr-10 duration-300">
          Partners
          </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#abacad]  hover:text-[16px]l hover:text-[#05C605] pr-10 duration-300">
        
        Contact Us
        </a>

        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-[#05C605] hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-10">Login</a>
      </div>
    </div>
  </nav>
        </div>
    );
}

export default Header;