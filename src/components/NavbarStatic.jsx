import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import '../assets/styles/NavbarStatic.css'

import Menu from './Menu.jsx'
import NavLogoIcon from './page-icons/NavLogoIcon.jsx'
import LinkedinIcon from './page-icons/LinkedinIcon.jsx'
import GithubIcon from './page-icons/GithubIcon.jsx'
import CodepenIcon from './page-icons/CodepenIcon.jsx'
import StackOverflowIcon from './page-icons/StackOverflowIcon.jsx'

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1280 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1279 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 639 })
	return isMobile ? children : null
}

export default function NavbarHide() {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 })

	return (
		<Fragment>
			<Laptop>
				<nav id='nav-static-laptop'>
					<div className='nav-logo-container'>
						<NavLogoIcon className='nav-logo-icon' />
						<div className='nav-logo-title'>The Hawk's Nest</div>
					</div>

					<div className='nav-links-container'>
						<Link
							className='nav-link'
							to='/'>
							Home
						</Link>
						<Link
							className='nav-link'
							to='/about'>
							About
						</Link>
						<Link
							className='nav-link'
							to='/work-samples'>
							Work Samples
						</Link>
						<Link
							className='nav-link'
							to='/contact'>
							Contact
						</Link>
					</div>

					<div className='nav-social-container'>
						<LinkedinIcon className='nav-social-icon' />
						<GithubIcon className='nav-social-icon' />
						<CodepenIcon className='nav-social-icon' />
						<StackOverflowIcon className='nav-social-icon' />
					</div>
				</nav>
			</Laptop>

			<Tablet>
				{isLargeScreen ? (
					<nav id='nav-static-tablet-large'>
						<div className='nav-logo-container'>
							<NavLogoIcon className='nav-logo-icon' />
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link
								className='nav-link'
								to='/'>
								Home
							</Link>
							<Link
								className='nav-link'
								to='/about'>
								About
							</Link>
							<Link
								className='nav-link'
								to='/work-samples'>
								Work Samples
							</Link>
							<Link
								className='nav-link'
								to='/contact'>
								Contact
							</Link>
						</div>

						<div className='nav-social-container'>
							<LinkedinIcon className='nav-social-icon' />
							<GithubIcon className='nav-social-icon' />
							<CodepenIcon className='nav-social-icon' />
							<StackOverflowIcon className='nav-social-icon' />
						</div>
					</nav>
				) : (
					<nav id='nav-static-tablet-small'>
						<div className='nav-logo-container'>
							<NavLogoIcon className='nav-logo-icon' />
							<div className='nav-logo-title'>The Hawk's Nest</div>
						</div>

						<div className='nav-links-container'>
							<Link
								className='nav-link'
								to='/'>
								Home
							</Link>
							<Link
								className='nav-link'
								to='/about'>
								About
							</Link>
							<Link
								className='nav-link'
								to='/work-samples'>
								Work Samples
							</Link>
							<Link
								className='nav-link'
								to='/contact'>
								Contact
							</Link>
						</div>
					</nav>
				)}
			</Tablet>

			<Mobile>
				<nav id='nav-static-mobile'>
					<div className='nav-menu-container'>
						<Menu />
					</div>

					<div className='nav-logo-container'>
						<div className='nav-logo-title'>The Hawk's Nest</div>
						<NavLogoIcon className='nav-logo-icon' />
					</div>
				</nav>
			</Mobile>
		</Fragment>
	)
}
