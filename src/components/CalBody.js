import React from 'react'
// import DisplayScreen from './DisplayScreen'
import ButtonBoard from './ButtonBoard'
import ScreenData from '../containers/ScreenData'


import './common.css'

const CalBody = () => (
	<div className='calBody'>
		<ScreenData className='displayScreen'/>
		<ButtonBoard className='buttonBoard' />
	</div>
)

export default CalBody