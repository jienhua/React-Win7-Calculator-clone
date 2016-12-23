export const ADD_NUM = 'ADD_NUM'  
export const ADD_DOT = 'ADD_DOT' 
export const SET_FRACTION_STATUS = 'SET_FRACTION_STATUS' 
export const BACKSPACE = 'BACKSPACE'
export const SET_ENTRY = 'SET_ENTRY'
export const SET_LAST_ENTRY = 'SET_LAST_ENTRY'
export const SET_TOTAL = 'SET_TOTAL'
export const DELETE_CURRENT_ENTRY = 'DELETE_CURRENT_ENTRY' // clear entry data 
// export const CLEAR_ALL = 'CLEAR_ALL'  // clear everything (entry, currentTotal, work)
export const SET_POSITIVE_NEGATIVE = 'SET_POSITIVE_NEGATIVE'
export const GET_SQR_ROOT = 'GET_SQR_ROOT'
export const SET_CURRENT_OPERATOR = 'SET_CURRENT_OPERATOR'
export const SET_NEGATIVE_SIGN = 'SET_NEGATIVE_SIGN'
export const SET_OVER_WRITE_ENTRY ='SET_OVER_WRITE_ENTRY'

export function addNum(input) {
	return {
		type: ADD_NUM,
		input
	}
}

export function addDot(input) {
	return {
		type: ADD_DOT,
		input
	}
}

export function backspace(){
	return {
		type: BACKSPACE
	}
}

export function setEntry(input){
	return {
		type: SET_ENTRY,
		input
	}
}

export function setLastEntry(input) {
	return {
		type: SET_LAST_ENTRY,
		input
	}
}

export function setTotal(input) {
	return {
		type: SET_TOTAL,
		input
	}
}

export function setCurrentOperator(operator){
	return {
		type: SET_CURRENT_OPERATOR,
		operator
	}
}

export function setFractionStatus(status){
	return {
		type: SET_FRACTION_STATUS,
		status
	}
}

export function setNegativeSign(input){
	return {
		type: SET_NEGATIVE_SIGN,
		input
	}
}

export function setPositiveNegative(status){
	return {
		type: SET_POSITIVE_NEGATIVE,
		status
	}
}

export function setOverWriteEntry(status) {
	return {
		type: SET_OVER_WRITE_ENTRY,
		status
	}
}