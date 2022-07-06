import "./App.css";
import Jodit from "./components/Jodit";
import parser from "html-react-parser";
import { useState,useRef } from "react";
function App() {

  // const [value, setValue] = useState("");
  const [showImage, setShowImage] = useState([]);
  const imageInput = async (e) => {
     const fileArray = Array.from(e.target.files)
     await new Promise (resolve => {
      for (let x in fileArray){
      const obj = {path:URL.createObjectURL(fileArray[x]),name:fileArray[x].name}
        setShowImage((prev)=>prev.concat(obj))
      }
      resolve()
     })
    //  console.log(fileArray)
    //  setShowImage((prevImage)=>prevImage.concat(fileArray))
  };
  console.log(showImage)
  return (
    <>
      {/* <Jodit value= {setValue} />
      {parser(value.slice(0,50))} */}
      <input type="file" multiple onChange={imageInput} />
      <button>upoload</button>
      {showImage.map(elem=> <div> <img src={elem.path} alt="" /> <span> {elem.name} </span> </div> )}
    </>
  );
}

export default App;
