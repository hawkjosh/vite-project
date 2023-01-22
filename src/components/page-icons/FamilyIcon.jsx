import React from 'react'
import '../../assets/styles/Icons.css'

export default function FamilyIcon({ iconSize, iconColor, fontColor }) {
	return (
		<svg
			id='family-icon'
			width={iconSize}
			fill={iconColor}
			viewBox='0 0 925 550'>
			<path d='M455 85C433 85 415 67 415 45S433 5 455 5S495 23 495 45S477 85 455 85ZM279 181C257 181 239 163 239 141S257 101 279 101S319 119 319 141S301 181 279 181ZM627 181C605 181 587 163 587 141S605 101 627 101S667 119 667 141S649 181 627 181ZM362 336L335 287V325C335 343 321 357 303 357H255C237 357 223 343 223 325V287L196 336C190 348 175 352 163 346S147 325 153 313L191 243C206 214 236 197 269 197H289C305 197 321 202 334 210L368 148C383 119 413 102 446 102H466C498 102 528 120 544 148L578 210C592 202 607 197 623 197H643C675 197 705 215 721 243L759 313C765 325 761 340 749 346S722 348 716 336L687 287V325C687 343 673 357 655 357H607C589 357 575 343 575 325V287L548 337C542 349 527 353 515 347S499 326 505 314L541 246C539 243 538 242 537 240L511 191V245C511 263 497 277 479 277H431C413 277 399 263 399 245V191L372 241C370 244 369 245 368 247L404 315C410 327 406 337 394 344S367 346 362 336Z' />
			<text
				fill={fontColor}
				stroke='none'
				fontSize='95px'
				x='10'
				y='515'>
				Super Dad/Husband
			</text>
		</svg>
	)
}
