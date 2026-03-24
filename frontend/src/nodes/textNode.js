// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}


// import { useState, useEffect } from 'react';
// import BaseNode from "./BaseNode";
// import { useUpdateNodeInternals } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [text, setText] = useState(data?.text || "{{input}}");
//   const [variables, setVariables] = useState([]);

//   const updateNodeInternals = useUpdateNodeInternals();

//   // 🔍 Extract variables
//   useEffect(() => {
//     const regex = /{{(.*?)}}/g;
//     const matches = [...text.matchAll(regex)].map(m => m[1].trim());

//     setVariables(matches);

//     // 🔥 IMPORTANT: tell ReactFlow to update handles
//     updateNodeInternals(id);

//   }, [text, id, updateNodeInternals]);

//   return (
//     <BaseNode
//       id={id}
//       title="Text"
//       inputs={variables}
//       outputs={["output"]}
//     >
//       <textarea
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);

//           // 🔥 auto resize
//           e.target.style.height = "auto";
//           e.target.style.height = e.target.scrollHeight + "px";

//           // 🔥 update node layout
//           updateNodeInternals(id);
//         }}
//         style={{
//           width: "100%",
//           minHeight: "40px",
//           resize: "none",
//           padding: "5px",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//           overflow: "hidden"
//         }}
//       />
//     </BaseNode>
//   );
// };