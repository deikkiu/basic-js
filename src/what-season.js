const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	const INCORRECT_RESULT_MSG = 'Invalid date!'

	if (!date) return 'Unable to determine the time of year!'

	// Проверка на объект типа Date
	if (!(date instanceof Date) || Object.keys(date).length > 0) {
		throw new Error(INCORRECT_RESULT_MSG)
	}

	const month = date.getMonth()

	if (isNaN(month)) {
		throw new Error(INCORRECT_RESULT_MSG)
	}

	if (month < 2 || month === 11) return 'winter'
	if (month < 5) return 'spring'
	if (month < 8) return 'summer'
	return 'autumn'
}

module.exports = {
	getSeason
}
