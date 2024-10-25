const ProjectHeader = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center
        w-full mb-10 text-4xl
      "
    >
      { children }
    </div>
  )
}

export default ProjectHeader;