import React from 'react'

export default function LeftArrow({ ...props }) {
	return (
		<svg
			{...props}
			viewBox='0 0 512 322'>
			<path
				transform='translate(0 -95)'
				d='M109.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z'
			/>
			<rect
				width='512'
				height='322'
				fill='transparent'
			/>
		</svg>
	)
}
