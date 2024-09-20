const createImg = ({ src = '', className = '', alt = '', ...props }) => {
  return (<img className={className} src={src} alt={alt} {...props} />)
}
export default createImg;