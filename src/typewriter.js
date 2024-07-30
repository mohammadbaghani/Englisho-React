import Typewriter from "react-ts-typewriter";

export default function App() {
  return (
    <>

      <Typewriter text="پردیسان"  speed={200}   className='head-text-color' 
        cursor={false}/>

      <div
        style={{
          whiteSpace: "pre"
        }}
      >
 
      </div>
    </>
  );
}
