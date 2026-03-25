import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

const APINode = ({ id }) => {
  return (
    <BaseNode title="API">
      <div>External API Call</div>

      <Handle type="target" position={Position.Left} id={`${id}-request`} />
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </BaseNode>
  );
};

export default APINode;