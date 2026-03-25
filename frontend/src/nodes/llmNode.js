// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

const LLMNode = ({ id, data }) => {
  return (
    <BaseNode title="LLM">

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '33%' }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '66%' }}
      />

      <div>This is a LLM.</div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />

    </BaseNode>
  );
};

export default LLMNode;
