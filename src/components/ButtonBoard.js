import React from 'react'

// import Button from './Button'
import FuncBtn from '../containers/FuncBtn'

import './common.css'

const ButtonBoard = () => (

	<div className='buttonBoard'>
		<div className='topOperator'>
			<FuncBtn text={"←"} btStyle='normalButton'/>
			<FuncBtn text={"CE"} btStyle='normalButton'/>
			<FuncBtn text={"C"} btStyle='normalButton'/>
			<FuncBtn text={"+/-"} btStyle='normalButton'/>
			<FuncBtn text={"√"} btStyle='normalButton'/>
		</div>
		<div className='numberKey'>
			<FuncBtn text={"9"} btStyle='normalButton'/>
			<FuncBtn text={"8"} btStyle='normalButton'/>
			<FuncBtn text={"7"} btStyle='normalButton'/>
			<FuncBtn text={"6"} btStyle='normalButton'/>
			<FuncBtn text={"5"} btStyle='normalButton'/>
			<FuncBtn text={"4"} btStyle='normalButton'/>
			<FuncBtn text={"3"} btStyle='normalButton'/>
			<FuncBtn text={"2"} btStyle='normalButton'/>
			<FuncBtn text={"1"} btStyle='normalButton'/>
			<FuncBtn text={"0"} btStyle='horizontalButton'/>
			<FuncBtn text={"."} btStyle='normalButton'/>
		</div>
		
		<div className='sideOperator'>
			<FuncBtn text={"/"} btStyle='normalButton'/>
			<FuncBtn text={"%"} btStyle='normalButton'/>
			<FuncBtn text={"*"} btStyle='normalButton'/>
			<FuncBtn text={"1/x"} btStyle='normalButton'/>
			<FuncBtn text={"-"} btStyle='normalButton'/>
			<FuncBtn text={"="} btStyle='verticalButton'/>
			<FuncBtn text={"+"} btStyle='normalButton'/>
		</div> 
	</div>
)

export default ButtonBoard