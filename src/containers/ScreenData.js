import { connect } from 'react-redux'

import Screen from '../components/DisplayScreen'

const mapStateToProps = (state, ownProps) => {
	return {
		entry: state.entry
	}
}

const ScreenData = connect(
	mapStateToProps
)(Screen)

export default ScreenData