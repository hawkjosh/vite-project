import React from 'react'
import '../../assets/styles/Icons.css'

export default function CloseBtnIcon({ iconSize, iconColor, onClick }) {
	return (
		<svg
			id='close-btn-icon'
			width={iconSize}
			fill={iconColor}
			onClick={onClick}
			viewBox='0 0 32 32'>
			<path d='M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z' />
		</svg>
	)
}
