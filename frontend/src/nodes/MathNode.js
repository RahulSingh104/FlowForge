import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

const MathNode = ({ id }) => {
  return (
    <BaseNode title="Math">
      <div>Performs Math Operation</div>

      <Handle type="target" position={Position.Left} id={`${id}-a`} style={{ top: 30 }} />
      <Handle type="target" position={Position.Left} id={`${id}-b`} style={{ top: 60 }} />

      <Handle type="source" position={Position.Right} id={`${id}-result`} />
    </BaseNode>
  );
};

export default MathNode;