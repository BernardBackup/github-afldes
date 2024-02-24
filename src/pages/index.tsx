/**
 * This is a Next.js page.
 */
 import { trpc } from '../utils/trpc';

 export default function IndexPage() {
   // Define an array to store image components
   const imageComponents = [];
 
   // Make requests for images 1 to 26
   for (let i = 1; i <= 26; i++) {
     // Fetch each image
     const result = trpc.greeting.useQuery({ name: 'client', imageNumber: i });
 
     // Push the image component to the array
     imageComponents.push(
       <div key={i} style={styles}>
         {result.data ? (
           <img src={result.data.image} alt={`Image ${i}`} />
         ) : (
           <h3>Loading image {i}...</h3>
         )}
       </div>
     );
   }
 
   return (
     <div style={containerStyles}>
       {/* Render all image components */}
       {imageComponents}
     </div>
   );
 }
 
 const containerStyles = {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'center',
 };
 
 const styles = {
   margin: '10px',
   textAlign: 'center',
 };
 