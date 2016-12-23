import React from 'react'

import './common.css'

const DisplayScreen = ({entry}) => (
	<div className='displayScreen'>
		<div className='workScreen'></div>
		<div className='entryScreen'>{entry.join("")}</div>
	</div>
)

export default DisplayScreen