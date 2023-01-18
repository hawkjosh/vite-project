import React from 'react'
import { useMediaQuery } from 'react-responsive'
import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 1440 })
	return isDesktop ? children : null
}

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return isMobile ? children : null
}

export default function Home() {
	return (
		<>
			<Desktop>
				<section
					id='home-desktop-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<svg
								width='150px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M64 69C64 34 93 5 128 5H512C547 5 576 34 576 69V257H515V66H125V257H64V69ZM5 298C5 288 14 279 24 279H616C626 279 635 288 635 298C635 321 601 355 558 355H82C39 355 5 321 5 298ZM281 141L250 172L281 202C290 212 290 228 281 237C272 246 256 246 247 237L199 189C190 180 190 164 199 155L247 107C256 98 272 98 281 107C290 116 290 132 281 141ZM393 107L441 155C450 164 450 180 441 189L393 237C384 246 368 246 359 237C350 228 350 212 359 203L390 172L359 141C350 132 350 116 359 107C368 98 384 98 393 107Z' />
							</svg>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='150px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M320 85C298 85 280 67 280 45S298 5 320 5S360 23 360 45S342 85 320 85ZM144 181C122 181 104 163 104 141S122 101 144 101S184 119 184 141S166 181 144 181ZM492 181C470 181 452 163 452 141S470 101 492 101S532 119 532 141S514 181 492 181ZM227 336L200 287V325C200 343 186 357 168 357H120C102 357 88 343 88 325V287L61 336C55 348 40 352 28 346S12 325 18 313L56 243C71 214 101 197 134 197H154C170 197 186 202 199 210L233 148C248 119 278 102 311 102H331C363 102 393 120 409 148L443 210C457 202 472 197 488 197H508C540 197 570 215 586 243L624 313C630 325 626 340 614 346S587 348 581 336L552 287V325C552 343 538 357 520 357H472C454 357 440 343 440 325V287L413 337C407 349 392 353 380 347S364 326 370 314L406 246C404 243 403 242 402 240L376 191V245C376 263 362 277 344 277H296C278 277 264 263 264 245V191L237 241C235 244 234 245 233 247L269 315C275 327 271 337 259 344S232 346 227 336Z' />
							</svg>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='150px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M5 15A10 10 0 0 1 15 5H115A10 10 0 0 1 125 15V225A25 25 0 0 0 150 250H245A25 25 0 0 0 265 230V155A25 25 0 0 0 245 135H140C130 100 175 100 180 70C185 35 220 35 225 20C230 10 230 5 240 5H360V250L265 355H135A135 130 0 0 1 5 225V15ZM370 5V345A10 10 0 0 0 380 355H465A10 10 0 0 0 475 345V155A25 25 0 0 1 490 135H525C535 135 535 125 540 115C555 85 580 105 590 75C605 40 635 60 635 5H370Z' />
							</svg>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Desktop>

			<Laptop>
				<section
					id='home-laptop-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<svg
								width='125px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M64 69C64 34 93 5 128 5H512C547 5 576 34 576 69V257H515V66H125V257H64V69ZM5 298C5 288 14 279 24 279H616C626 279 635 288 635 298C635 321 601 355 558 355H82C39 355 5 321 5 298ZM281 141L250 172L281 202C290 212 290 228 281 237C272 246 256 246 247 237L199 189C190 180 190 164 199 155L247 107C256 98 272 98 281 107C290 116 290 132 281 141ZM393 107L441 155C450 164 450 180 441 189L393 237C384 246 368 246 359 237C350 228 350 212 359 203L390 172L359 141C350 132 350 116 359 107C368 98 384 98 393 107Z' />
							</svg>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='125px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M320 85C298 85 280 67 280 45S298 5 320 5S360 23 360 45S342 85 320 85ZM144 181C122 181 104 163 104 141S122 101 144 101S184 119 184 141S166 181 144 181ZM492 181C470 181 452 163 452 141S470 101 492 101S532 119 532 141S514 181 492 181ZM227 336L200 287V325C200 343 186 357 168 357H120C102 357 88 343 88 325V287L61 336C55 348 40 352 28 346S12 325 18 313L56 243C71 214 101 197 134 197H154C170 197 186 202 199 210L233 148C248 119 278 102 311 102H331C363 102 393 120 409 148L443 210C457 202 472 197 488 197H508C540 197 570 215 586 243L624 313C630 325 626 340 614 346S587 348 581 336L552 287V325C552 343 538 357 520 357H472C454 357 440 343 440 325V287L413 337C407 349 392 353 380 347S364 326 370 314L406 246C404 243 403 242 402 240L376 191V245C376 263 362 277 344 277H296C278 277 264 263 264 245V191L237 241C235 244 234 245 233 247L269 315C275 327 271 337 259 344S232 346 227 336Z' />
							</svg>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='125px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M5 15A10 10 0 0 1 15 5H115A10 10 0 0 1 125 15V225A25 25 0 0 0 150 250H245A25 25 0 0 0 265 230V155A25 25 0 0 0 245 135H140C130 100 175 100 180 70C185 35 220 35 225 20C230 10 230 5 240 5H360V250L265 355H135A135 130 0 0 1 5 225V15ZM370 5V345A10 10 0 0 0 380 355H465A10 10 0 0 0 475 345V155A25 25 0 0 1 490 135H525C535 135 535 125 540 115C555 85 580 105 590 75C605 40 635 60 635 5H370Z' />
							</svg>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Laptop>

			<Tablet>
				<section
					id='home-tablet-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M64 69C64 34 93 5 128 5H512C547 5 576 34 576 69V257H515V66H125V257H64V69ZM5 298C5 288 14 279 24 279H616C626 279 635 288 635 298C635 321 601 355 558 355H82C39 355 5 321 5 298ZM281 141L250 172L281 202C290 212 290 228 281 237C272 246 256 246 247 237L199 189C190 180 190 164 199 155L247 107C256 98 272 98 281 107C290 116 290 132 281 141ZM393 107L441 155C450 164 450 180 441 189L393 237C384 246 368 246 359 237C350 228 350 212 359 203L390 172L359 141C350 132 350 116 359 107C368 98 384 98 393 107Z' />
							</svg>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M320 85C298 85 280 67 280 45S298 5 320 5S360 23 360 45S342 85 320 85ZM144 181C122 181 104 163 104 141S122 101 144 101S184 119 184 141S166 181 144 181ZM492 181C470 181 452 163 452 141S470 101 492 101S532 119 532 141S514 181 492 181ZM227 336L200 287V325C200 343 186 357 168 357H120C102 357 88 343 88 325V287L61 336C55 348 40 352 28 346S12 325 18 313L56 243C71 214 101 197 134 197H154C170 197 186 202 199 210L233 148C248 119 278 102 311 102H331C363 102 393 120 409 148L443 210C457 202 472 197 488 197H508C540 197 570 215 586 243L624 313C630 325 626 340 614 346S587 348 581 336L552 287V325C552 343 538 357 520 357H472C454 357 440 343 440 325V287L413 337C407 349 392 353 380 347S364 326 370 314L406 246C404 243 403 242 402 240L376 191V245C376 263 362 277 344 277H296C278 277 264 263 264 245V191L237 241C235 244 234 245 233 247L269 315C275 327 271 337 259 344S232 346 227 336Z' />
							</svg>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M5 15A10 10 0 0 1 15 5H115A10 10 0 0 1 125 15V225A25 25 0 0 0 150 250H245A25 25 0 0 0 265 230V155A25 25 0 0 0 245 135H140C130 100 175 100 180 70C185 35 220 35 225 20C230 10 230 5 240 5H360V250L265 355H135A135 130 0 0 1 5 225V15ZM370 5V345A10 10 0 0 0 380 355H465A10 10 0 0 0 475 345V155A25 25 0 0 1 490 135H525C535 135 535 125 540 115C555 85 580 105 590 75C605 40 635 60 635 5H370Z' />
							</svg>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Tablet>

			<Mobile>
				<section
					id='home-mobile-layout'
					className='home-layout'
				>
					<img
						src={myAvatar}
						alt='Hawk Avatar'
					/>

					<div className='home-divider'>
						<hr />
					</div>

					<div className='home-descriptors-container'>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M64 69C64 34 93 5 128 5H512C547 5 576 34 576 69V257H515V66H125V257H64V69ZM5 298C5 288 14 279 24 279H616C626 279 635 288 635 298C635 321 601 355 558 355H82C39 355 5 321 5 298ZM281 141L250 172L281 202C290 212 290 228 281 237C272 246 256 246 247 237L199 189C190 180 190 164 199 155L247 107C256 98 272 98 281 107C290 116 290 132 281 141ZM393 107L441 155C450 164 450 180 441 189L393 237C384 246 368 246 359 237C350 228 350 212 359 203L390 172L359 141C350 132 350 116 359 107C368 98 384 98 393 107Z' />
							</svg>
							<div>Emerging Developer</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M320 85C298 85 280 67 280 45S298 5 320 5S360 23 360 45S342 85 320 85ZM144 181C122 181 104 163 104 141S122 101 144 101S184 119 184 141S166 181 144 181ZM492 181C470 181 452 163 452 141S470 101 492 101S532 119 532 141S514 181 492 181ZM227 336L200 287V325C200 343 186 357 168 357H120C102 357 88 343 88 325V287L61 336C55 348 40 352 28 346S12 325 18 313L56 243C71 214 101 197 134 197H154C170 197 186 202 199 210L233 148C248 119 278 102 311 102H331C363 102 393 120 409 148L443 210C457 202 472 197 488 197H508C540 197 570 215 586 243L624 313C630 325 626 340 614 346S587 348 581 336L552 287V325C552 343 538 357 520 357H472C454 357 440 343 440 325V287L413 337C407 349 392 353 380 347S364 326 370 314L406 246C404 243 403 242 402 240L376 191V245C376 263 362 277 344 277H296C278 277 264 263 264 245V191L237 241C235 244 234 245 233 247L269 315C275 327 271 337 259 344S232 346 227 336Z' />
							</svg>
							<div>Super Dad/Husband</div>
						</div>
						<div className='home-descriptor'>
							<svg
								width='100px'
								height='auto'
								viewBox='0 0 640 360'
								fill='var(--secondary)'
							>
								<path d='M5 15A10 10 0 0 1 15 5H115A10 10 0 0 1 125 15V225A25 25 0 0 0 150 250H245A25 25 0 0 0 265 230V155A25 25 0 0 0 245 135H140C130 100 175 100 180 70C185 35 220 35 225 20C230 10 230 5 240 5H360V250L265 355H135A135 130 0 0 1 5 225V15ZM370 5V345A10 10 0 0 0 380 355H465A10 10 0 0 0 475 345V155A25 25 0 0 1 490 135H525C535 135 535 125 540 115C555 85 580 105 590 75C605 40 635 60 635 5H370Z' />
							</svg>
							<div>Vol For Life</div>
						</div>
					</div>
				</section>
			</Mobile>
		</>
	)
}
