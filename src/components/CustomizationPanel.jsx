"use client"
import useComponentStore from '../state/useComponentStore';

const CustomizationPanel = () => {
  const { color, shape, size, setColor, setShape, setSize } = useComponentStore();

  return (
    <div>
      <label>
        Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <label>
        Shape:
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
        </select>
      </label>

      <label>
        Size:
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </div>
  );
};

export default CustomizationPanel;
