import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

const LoggerNode = ({ id }) => {
  return (
    <BaseNode title="Logger">
      <div>Logs Data</div>

      <Handle type="target" position={Position.Left} id={`${id}-input`} />
    </BaseNode>
  );
};

export default LoggerNode;