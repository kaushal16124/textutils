import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Button clicked");
        let newText=text.toUpperCase();
        setText(newText);
        console.log(newText);
    }
    const handleLoClick = ()=> {
        console.log("Button clicked");
        let newText=text.toLowerCase();
        setText(newText);
        console.log(newText);
    }
    const handleOnChange = (event)=> {
        console.log("Text changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>

    <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
            <label for="myBox" className="form-label"></label>
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>

    </div>

    <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
    </div>
    </>
  )
}
