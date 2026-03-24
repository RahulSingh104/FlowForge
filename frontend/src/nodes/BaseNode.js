// import { Handle, Position } from "reactflow";

// const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
//   return (
//     <div style={styles.node}>
//       {/* Title */}
//       <div style={styles.header}>{title}</div>

//       {/* Left Handles */}
//       {inputs.map((input, i) => (
//         <Handle
//           key={input}
//           type="target"
//           position={Position.Left}
//           id={`${id}-${input}`}
//           style={{ top: 30 + i * 20 }}
//         />
//       ))}

//       {/* Content */}
//       <div style={{ fontSize: "12px", color: "#6b7280" }}>{children}</div>

//       {/* Right Handles */}
//       {outputs.map((output, i) => (
//         <Handle
//           key={output}
//           type="source"
//           position={Position.Right}
//           id={`${id}-${output}`}
//           style={{ top: 30 + i * 20 }}
//         />
//       ))}
//     </div>
//   );
// };

// const styles = {
//   node: {
//     width: 220,
//     minHeight: 100,
//     borderRadius: 12,
//     padding: 12,
//     background: "#ffffff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     border: "1px solid #e5e7eb",
//     transition: "0.2s ease",
//     cursor: "pointer",
//   },
//   header: {
//     fontWeight: "600",
//     fontSize: "14px",
//     marginBottom: 8,
//     color: "#111827",
//   },
// };

// export default BaseNode;
