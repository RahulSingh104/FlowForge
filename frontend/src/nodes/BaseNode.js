// const BaseNode = ({ title, children }) => {
//   return (
//     <div style={styles.node}>
//       <div style={styles.header}>{title}</div>
//       <div>{children}</div>
//     </div>
//   );
// };

// const styles = {
//   node: {
//     width: 200,
//     minHeight: 100,
//     border: "1px solid black",
//     padding: 8,
//     borderRadius: 6,
//     background: "#fff",
//   },
//   header: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
// };

// export default BaseNode;



const BaseNode = ({ title, children }) => {
  return (
    <div style={styles.node}>
      <div style={styles.header}>{title}</div>
      <div>{children}</div>
    </div>
  );
};

const styles = {
  node: {
    width: 220,
    minHeight: 100,
    borderRadius: 12,
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    padding: 12,
    transition: "0.2s",
  },
  header: {
    fontWeight: "600",
    marginBottom: 8,
    fontSize: "14px",
    color: "#111827",
  },
};

export default BaseNode;