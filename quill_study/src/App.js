import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import { useCallback, useState } from 'react';



function App() {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']
    ]         
  };

  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");

  const handleTitleChange = useCallback((e) => {
    setTitle(() => e.target.value);
  }, [])

  // 바로 value(text 데이터) 들어옴
  const handleQuillChange = useCallback((value) => {
    setContent(() => value);
  }, [])
  
  console.log(content);

  return (
    <>
      <input type='text' onChange={handleTitleChange}/>
      <ReactQuill modules={modules} onChange={handleQuillChange}/>
    </>
  );
}

export default App;
