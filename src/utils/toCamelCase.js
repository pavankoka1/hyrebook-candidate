import camelCase from 'lodash/camelCase'

function toCamelCase(obj) {
	if (typeof obj != 'object') return obj

	for (var oldName in obj) {
		// Camel to underscore
		const newName = camelCase(oldName)

		// Only process if names are different
		if (newName !== oldName) {
			// Check for the old property name to avoid a ReferenceError in strict mode.
			if (obj.hasOwnProperty(oldName)) {
				obj[newName] = obj[oldName]
				delete obj[oldName]
			}
		}

		// Recursion
		if (typeof obj[newName] == 'object') {
			obj[newName] = toCamelCase(obj[newName])
		}
	}
	return obj
}

export default toCamelCase
