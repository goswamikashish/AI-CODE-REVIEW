import { useState,useEffect } from "react"
import"prismjs/themes/prism-tomorrow.css"
import EditorModule from "react-simple-code-editor"
import Prism from "prismjs"
import Markdown from "react-markdown"
import axios from "axios"
import './App.css'

const Editor = EditorModule.default;

function App() {
  const[code,setCode]=useState(`
    code here
    `)

  const[review,setReview]=useState("")

  useEffect(()=>{
    Prism.highlightAll();
  },[]);

  async function reviewCode(){
    try{
        console.log("Sending code:", code);
  const response= await axios.post("http://localhost:5000/ai/get-review",{code});
  setReview(response.data);
  }catch (err) {
   console.log("ERROR RESPONSE:", err.response?.data);
  }
}

  return(
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor value={code}
          onValueChange={code => setCode(code)}
          highlight={code =>Prism.highlight (code,Prism.languages.javascript,"javascript")}
          padding={10}
          style={{
            fontFamily:'"Fira code","Fira Mono",monospace',
            fontSize:16,
            border:"1px solid #ddd",
            borderRadius:"5px",
            height:"100%",
            width:"100%"
          }}/>
          
          <div onClick={reviewCode}
          className="reviewbtn">Review</div>
        </div>
      </div>


      <div className="right">
      <Markdown>{review}</Markdown></div>
    </main>
    </>
  )
}



export default App;
