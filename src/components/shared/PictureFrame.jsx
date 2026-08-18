function PictureFrame({ children, className, delay }) {
  return (
    <div
      className={className}
      style={{
        animationDelay: delay,
      }}
    >
      <div className="frame-inner">{children}</div>
    </div>
  )
}

export default PictureFrame
