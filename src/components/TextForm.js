import React, {useState} from 'react'

export default function TextForm(props) {
 const [myStyle,setMyStyle]= useState(
  {
    color:'#042743',
    backgroundColor :"white"
  })
  const [btnText,setBtnText] = useState('Enable dark mode')

  const toggleStyle = ()=>
  {
    
    if(myStyle.color==='#042743')
    {
      setMyStyle(
        {
          color:'white',
          backgroundColor:'#042743'
        }
      ) 
      setBtnText("Enable Light mode")
    }
    else{
      setMyStyle(
        {
          color:'#042743',
          backgroundColor:"white"
        }
      )
      setBtnText("Enable dark mode")
    }
  }
  const handleCopy = ()=>
  {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success")
  }
  const removeExtraSpace=()=>
  {
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
  }
  const handleUpClick = ()=>
  {
     let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","success")
  }
  const handleLoClick = ()=>
  {
     let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","success")
  }
  const handleClearClick = ()=>
  {
     let newText="";
    setText(newText)
    props.showAlert("Text clear","success")
  }
  const handleOnChange = (event)=>
  {
    setText(event.target.value)
  }
  const[text,setText]= useState('enter text here');
  return (
    <div className='mainContainer' style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange}>
      <div className='container'> 
          <h1>{props.heading}</h1>
              <div className="mb-3">
              <textarea className="form-control"  style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
              </div>
        <button className="btn-btn-primary mx-2"  style={myStyle} onClick={handleUpClick}>convert to upper case</button>
        <button className="btn-btn-primary mx-2"  style={myStyle} onClick={handleLoClick}>convert to lower case</button>
        <button className="btn-btn-primary mx-2"  style={myStyle} onClick={handleClearClick}>clear text</button>
        <button className="btn-btn-primary mx-2"  style={myStyle} onClick={handleCopy}>Copy text</button>
        <button className="btn-btn-primary mx-2"  style={myStyle} onClick={removeExtraSpace}>Remove Extra space</button>
      
      </div>
      <div className="container">
        <h1> your text summary </h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 *  text.split(" ").length} minutes to read</p>
        <h2> Preview </h2>
        <p>{text}</p>
      </div>
      <div className='container my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  )
}
