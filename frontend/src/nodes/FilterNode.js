import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

const FilterNode = ({ id }) => {
  return (
    <BaseNode title="Filter">
      <div>Filters Data</div>

      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};

export default FilterNode;