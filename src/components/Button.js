import React from 'react'

import './common.css'

const Button = ({text, btStyle, onClick}) => {
	const cssclassess = `bt ${btStyle}`
	return (
		<div className={cssclassess}
			 onClick={onClick}>
			{text}
		</div>
	)
}

export default Button