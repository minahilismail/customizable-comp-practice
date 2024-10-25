"use client"
import useComponentStore from '../state/useComponentStore';

const CodeBlock = () => {
  const { color, shape, size } = useComponentStore();

  return (
    <pre>
      {`<Shape 
  color="${color}" 
  shape="${shape}" 
  size="${size}" />`}
    </pre>
  );
};

export default CodeBlock;
