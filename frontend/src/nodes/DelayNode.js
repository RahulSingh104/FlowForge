import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

const DelayNode = ({ id }) => {
  return (
    <BaseNode title="Delay">
      <div>Adds Delay</div>

      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};

export default DelayNode;