interface CheckCircleProps extends React.SVGAttributes<SVGSVGElement> {}

const CheckCircle: React.FC<CheckCircleProps> = (props) => {
	return (
		<svg
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g id='check-circle'>
				<path
					id='Vector'
					d='M20 3.33337C10.81 3.33337 3.33331 10.81 3.33331 20C3.33331 29.19 10.81 36.6667 20 36.6667C29.19 36.6667 36.6666 29.19 36.6666 20C36.6666 10.81 29.19 3.33337 20 3.33337ZM20 33.3334C12.6483 33.3334 6.66665 27.3517 6.66665 20C6.66665 12.6484 12.6483 6.66671 20 6.66671C27.3516 6.66671 33.3333 12.6484 33.3333 20C33.3333 27.3517 27.3516 33.3334 20 33.3334Z'
					fill='currentColor'
				/>
				<path
					id='Vector_2'
					d='M16.665 22.645L12.8333 18.82L10.48 21.18L16.6683 27.355L27.845 16.1783L25.4883 13.8217L16.665 22.645Z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default CheckCircle;
