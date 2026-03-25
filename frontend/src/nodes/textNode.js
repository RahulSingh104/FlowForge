// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';
// import BaseNode from './BaseNode';

//  const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <BaseNode title="Text">

//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>

//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />

//     </BaseNode>
//   );
// };

// export default TextNode;

import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  // 🔥 Detect variables {{var}}
  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    const matches = [...text.matchAll(regex)].map(m => m[1]);
    setVariables(matches);
  }, [text]);

  // 🔥 Auto resize textarea
  const handleChange = (e) => {
    setText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode title="Text">

      {/* Dynamic INPUT HANDLES */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 30 + index * 20 }}
        />
      ))}

      {/* TEXT INPUT */}
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          minHeight: "40px",
          resize: "none",
          padding: "5px"
        }}
      />

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />

    </BaseNode>
  );
};

export default TextNode;


