import { connect } from 'react-redux'
import * as actions from '../actions/actions'

import Button from '../components/Button'

const operators = {
    '+': function (a,b) {return a+b},
    '-': function (a,b) {return a-b},
    '*': function (a,b) {return a*b},
    '/': function (a,b) {return a/b},
    '√': function (a)   {return Math.sqrt(a)},
    '1/x': function(a)  {return (1/a)},
    '%': function (a, b) {return (a/100) * b}
}

const mapStateToProps = (state, ownProps) => {
	return {
		text: ownProps.text,
		btStyle: ownProps.btStyle,
		isFraction: state.isFraction,
		entry: state.entry,
        isNegative: state.isNegative,
        total: state.total,
        lastEntry: state.lastEntry,
        overWriteEntry: state.overWriteEntry,
        currentOpr: state.currentOpr
	}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => {
// 			if (ownProps.text === '.'){
// 				dispatch(addDot('.'))
// 			}else{
// 				dispatch(addNum(ownProps.text))
// 			}
// 		}
// 	}
// }

const mergeProps = (state, dispatchProps, props) => {
	const { isFraction, 
            entry, 
            isNegative, 
            total, 
            lastEntry,
            overWriteEntry,
            currentOpr} = state
	const { dispatch } = dispatchProps
	
	const input = props.text

	return {
		...props,
		onClick: () => {
			if (input === '.' && !isFraction){
                if(overWriteEntry){
                    dispatch(actions.setEntry('0'))
                    dispatch(actions.setOverWriteEntry(false))
                }
				dispatch(actions.addDot('.'))
				dispatch(actions.setFractionStatus(true))
			}else if(input.length === 1 && (input.charCodeAt() >= 48 && input.charCodeAt() <= 57)){
                if(overWriteEntry || (entry.length === 1 && entry[0] === '0')){
                    dispatch(actions.setEntry(input))
                    dispatch(actions.setOverWriteEntry(false))
                }else{
                    dispatch(actions.addNum(input))
                }
			}else if(input === '+' ||
                     input === '-' ||
                     input === '*' ||
                     input === '/'){
                if(!overWriteEntry && currentOpr !== ''){
                    const nextTotal = operators[currentOpr](parseFloat(total), parseFloat(entry.join("")))
                    dispatch(actions.setTotal(nextTotal))
                    dispatch(actions.setEntry(nextTotal.toString()))
                }else{
                    dispatch(actions.setTotal(entry.join("")))
                }
                
                dispatch(actions.setCurrentOperator(input)) 
                dispatch(actions.setOverWriteEntry(true))
                dispatch(actions.setFractionStatus(false))
                dispatch(actions.setPositiveNegative(false))
                dispatch(actions.setLastEntry(entry))    

			}else if(input === '←'){
				if (entry.length === 1){
                    dispatch(actions.setEntry('0'))
                }else{
                    const lastEntry = entry[entry.length-1]
                    if (lastEntry === '.'){
                        dispatch(actions.setFractionStatus(false))
                    }
                    dispatch(actions.backspace())
                }
			}else if(input === 'CE'){
				dispatch(actions.setEntry('0'))
                dispatch(actions.setFractionStatus(false))
                dispatch(actions.setPositiveNegative(false))
			}else if(input === 'C'){
				dispatch(actions.setEntry('0'))
                dispatch(actions.setFractionStatus(false))
                dispatch(actions.setCurrentOperator(''))
                dispatch(actions.setPositiveNegative(false))
                dispatch(actions.setTotal('0'))
                dispatch(actions.setLastEntry(['0']))
			}else if(input === '+/-'){
                if (entry.length > 1 || entry[0] !== '0'){
    				if (isNegative){
                        dispatch(actions.setPositiveNegative(false))
                        dispatch(actions.setNegativeSign('positive'))
                    }else{
                        dispatch(actions.setPositiveNegative(true))
                        dispatch(actions.setNegativeSign('negative'))
                    }
                }
			}else if(input === '√' || input === '1/x'){
				const nextEntry = operators[input](parseFloat(entry.join("")))
                dispatch(actions.setEntry(nextEntry.toString().split("")))
			}else if(input === '%'){
				const nextEntry = operators[input](parseFloat(total), parseFloat(entry.join("")))
                dispatch(actions.setEntry(nextEntry.toString().split("")))
			}else if(input === '='){
                // dispatch(actions.setOverWriteEntry(true))
				if(currentOpr !== '' && !overWriteEntry){
                    const nextEntry = operators[currentOpr](parseFloat(total), parseFloat(entry.join("")))
                    dispatch(actions.setTotal('0'))
                    dispatch(actions.setLastEntry(entry)) 
                    dispatch(actions.setEntry(nextEntry.toString().split("")))

                    dispatch(actions.setOverWriteEntry(true))
                }
                if(overWriteEntry){
                    const nextEntry = operators[currentOpr](parseFloat(entry.join("")), parseFloat(lastEntry))
                    dispatch(actions.setEntry(nextEntry.toString().split("")))
                }
                // dispatch(actions.setLastEntry(entry)) 
			}
		}
	}
}

const FuncBtn = connect (
	mapStateToProps,
	// mapDispatchToProps,
	null,
	mergeProps
)(Button)

export default FuncBtn