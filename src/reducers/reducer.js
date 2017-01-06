import { combineReducers } from 'redux'

import * as actions from '../actions/actions'

function entry(state = ['0'], action) {
	switch (action.type) {
		case actions.ADD_NUM:
			return [
				...state,
				action.input
			]
		case actions.ADD_DOT:
			return [
				...state,
				action.input
			]
		case actions.SET_ENTRY:
			return [ 
				...action.input
			]
		case actions.BACKSPACE:
			return handleBackSpace(state)
		case actions.SET_NEGATIVE_SIGN:
			return handleSetNegativeSign(state, action.input)
		default: 
			return state
	}
}

function works(state = [], action){
	switch (action.type) {
		case actions.ADD_WORK:
			return [
				...state,
				action.input
			]
		case actions.SET_WORK:
			return [
				...action.input
			]
		case actions.SET_WORK_LAST_ENTRY:
			return setWorkLastEntry(state, action.input)
		case actions.EMPTY_WORK:
			return []
		default:
			return state
	}
}

function lastEntry(state = "0.0", action) {
	switch (action.type) {
		case actions.SET_LAST_ENTRY:
			return action.input.join("")
			
		default:
			return state
	}
}

function total(state = "0.0", action) {
	switch (action.type) {
		case actions.SET_TOTAL:
			return action.input
		default:
			return state
	}
}

function handleBackSpace(state){
	let nextState = state
	nextState.pop()
	return [...nextState]
}

function handleSetNegativeSign(state, input){
	let nextState = state
	if (input === 'positive'){
		nextState.shift()
	}else if(input === 'negative'){
		nextState = ['-', ...nextState]
	}
	return [...nextState]
}

function isFraction(state = false, action) {
	switch (action.type) {
		case actions.SET_FRACTION_STATUS:
			return action.status 
		default:
			return state
	}
}

function isNegative(state = false, action) {
	switch (action.type) {
		case actions.SET_POSITIVE_NEGATIVE:
			return action.status
		default:
			return state
	}
}

function currentOpr(state = '', action) {
	switch (action.type) {
		case actions.SET_CURRENT_OPERATOR:
			return action.operator
		default:
			return state
	}
}

function overWriteEntry(state ='true', action) {
	switch (action.type) {
		case actions.SET_OVER_WRITE_ENTRY:
			return action.status
		default: 
			return state
	}
}

function setWorkLastEntry(state, input){
	let nextState = state
	nextState.pop()
	return [...nextState, input]
}

const calApp = combineReducers({
	entry,
	isFraction,
	currentOpr,
	isNegative,
	total,
	lastEntry,
	overWriteEntry,
	works
})

export default calApp