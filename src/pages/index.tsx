/**
 * This is a Next.js page.
 */
 import { trpc } from '../utils/trpc';
//import Header from '../components/Header'

 export default function IndexPage() {
   // Define an array to store image components
   const imageComponents = [];
 
   // Make requests for images 1 to 26
   for (let i = 1; i <= 26; i++) {
     // Fetch each image
     const result = trpc.greeting.useQuery({ name: 'client', imageNumber: i });
 
     // Push the image component to the array
     imageComponents.push(
       <div key={i} className='bg-black'>
         {result.data ? (
           <img src={result.data.image} alt={`Image ${i}`} />
         ) : (
           <h3>Loading image {i}...</h3>
         )}
       </div>
     );
   }
   function Header() {



  return (
    <>

      <div className=' w-[91%] 3xl:max-w-[1836px] mx-auto  mt-[27px] relative' >


        <nav className={`  top-[27px] fixed  nav-bg-top w-[91%] 3xl:max-w-[1836px] z-[99] rounded-[60px] px-[16px] sm:px-2 md:px-8 mx-auto `}  >
          <div className="   flex flex-wrap items-center justify-between mx-auto py-3">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
  {/*<img src={Logo} className=" w-[48px] h-[48px] " alt="Flowbite Logo" />*/}
              <span className="self-center f-f-sm text-tiny  whitespace-nowrap text-white ">Bernard Degens</span>
            </a>
            {/*<button data-collapse-toggle="navbar-default" type="button" className=" mr-3 inline-flex items-center  justify-center text-sm  md:hidden " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 17 14">
                <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>*/}
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-8 lg:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
                <li>
                  <a href="https://twitter.com/Bernard_O1" className="block py-2 px-3 text-white f-f-m text-tiny  rounded md:bg-transparent  md:p-0" aria-current="page">Twitter</a>
                </li>

                <li>
                  <a href="#Community" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">Telegram</a>
                </li>
                <li>
                  <a href="#Audit" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                    <ul className=' inline-flex items-center ' >
                      <li>
                       Projects
                      </li>
                      <li className=' ml-3 ' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.25 12.75L12.75 5.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.25 5.25H12.75V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/BernardOnuh" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                    <ul className=' inline-flex items-center ' >
                      <li>
                        Github
                      </li>
                      <li className=' ml-3 ' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.25 12.75L12.75 5.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.25 5.25H12.75V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
 
   return (
    <div> 
     <Header/>
    {/* <div className='bg-black'>
      
        Render all image components 
       {imageComponents}
     </div>
     */}
     </div>
   );
 }
 
