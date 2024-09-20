export const BagIcon = ({ className, ...props }) => {
  return (
    <svg className={className ?? ''} {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M5.75 1.5H10.25C10.3875 1.5 10.5 1.6125 10.5 1.75V3H5.5V1.75C5.5 1.6125 5.6125 1.5 5.75 1.5ZM4 1.75V3H2C0.896875 3 0 3.89688 0 5V8H6H10H16V5C16 3.89688 15.1031 3 14 3H12V1.75C12 0.784375 11.2156 0 10.25 0H5.75C4.78438 0 4 0.784375 4 1.75ZM16 9H10V10C10 10.5531 9.55313 11 9 11H7C6.44687 11 6 10.5531 6 10V9H0V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V9Z" fill="#5C89CE" />
    </svg>
  )
}
