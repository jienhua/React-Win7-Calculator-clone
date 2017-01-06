import React from 'react'

import './common.css'

const DisplayScreen = ({entry, works}) => (
	<div className='displayScreen'>
		<div className='workScreen'>{works.join(" ")}</div>
		<div className='entryScreen'>{entry.join("")}</div>
	</div>
)

export default DisplayScreen