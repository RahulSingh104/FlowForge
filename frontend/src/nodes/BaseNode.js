const BaseNode = ({ title, children,icon }) => {
  return (
    <div
      style={styles.node}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <div style={styles.header}>
        <span style={{ marginRight: 6 }}>{icon}</span>
        {title}
        </div>
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
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  header: {
    fontWeight: "600",
    marginBottom: 8,
    fontSize: "14px",
    color: "#111827",
  },
};

export default BaseNode;
