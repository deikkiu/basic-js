const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	const LOG_2 = 0.693

	if (
		typeof sampleActivity !== 'string' ||
		isNaN(sampleActivity) ||
		sampleActivity <= 0 ||
		sampleActivity > MODERN_ACTIVITY
	) {
		return false
	}

	const rateConstant = LOG_2 / HALF_LIFE_PERIOD
	const age = Math.ceil(
		Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant
	)

	return age
}

module.exports = {
	dateSample
}
