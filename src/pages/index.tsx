/**
 * This is a Next.js page.
 */
 import { trpc } from '../utils/trpc';
//import Header from '../components/Header'
import Image from 'next/image';


export default function IndexPage() {
  // Define an array to store image components
  const imageComponents = [];

  // Make requests for images 1 to 26
  for (let i = 1; i <= 26; i++) {
    // Fetch each image
    const result = trpc.greeting.useQuery({ name: 'client', imageNumber: i });

    // Push the image component to the array
    imageComponents.push(
       <div key={i} className="mb-4 ">
         {result.data ? (
           <img
             src={result.data.image}
             alt={`Image ${i}`}
             width={100}
             height={100}
             className="w-full h-auto mx-auto object-cover rounded-2xl cursor-pointer"
           />
         ) : (
                  <div key={i} className="mb-4 ">
         {result.data ? (
           <img
             src={result.data.image}
             alt={`Image ${i}`}
             width={100}
             height={100}
             className="w-full h-auto mx-auto object-cover rounded-2xl cursor-pointer"
           />
         )}
       </div>
    );
  }
   function Header() {



  return (
    <>

      <div className=' w-[91%] 3xl:max-w-[1836px] mx-auto  mt-[27px] relative' >
        <nav className={`  top-[27px] fixed  nav-bg-top w-[91%] 3xl:max-w-[1836px] z-[99] rounded-[60px] px-[16px] sm:px-2 md:px-8 mx-auto`}  >
          <div className="   flex flex-wrap items-center justify-between mx-auto py-3">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
             <Image src="/LAMBDA_black.svg" width={25} height={25} alt="Flowbite Logo"  />
             <Image src="/LAMBDA_label.svg" width={75} height={50} alt="Flowbite Logo"  />
            </a>   
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-8 lg:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
                <li>
                  <a href="https://twitter.com/LAMBDA_Protocol" className="block py-2 px-3 text-white f-f-m text-tiny  rounded md:bg-transparent  md:p-0" aria-current="page">Twitter</a>
                </li>

                <li>
                  <a href="https://discord.com/invite/TM62WjbbCd" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">Discord</a>
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
    <div className=' relative'> 
     <Header/>
      <div className=' w-[91%] xl:max-w-[1320px] mx-auto sm:my-[96px] my-[100px] text-center ' >
      <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary  ' >
       Lambda Protocol NFTs
      </h2></div>
     <div className='w-[91%] xl:max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
       {imageComponents}
     </div>
     
     </div>
   );
 }
 
