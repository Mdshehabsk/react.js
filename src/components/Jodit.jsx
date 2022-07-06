import React,{useRef} from 'react'
import JoditEditor from 'jodit-react'

const Jodit = ({value}) => {
    const editor = useRef(null)
  return (
    <>
    <JoditEditor ref={editor} onChange={(e)=>value(e)} />
    </>
  )
}

export default Jodit