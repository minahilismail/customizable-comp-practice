"use client"
import useComponentStore from '../state/useComponentStore';

const ComponentPreview = () => {
  const { color, shape, size } = useComponentStore();

  const styles = {
    backgroundColor: color,
    width: size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px',
    height: size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px',
    borderRadius: shape === 'circle' ? '50%' : '0',
  };

  return <div style={styles}></div>;
};

export default ComponentPreview;
