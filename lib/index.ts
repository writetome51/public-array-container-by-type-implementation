import { errorIfNotString } from 'error-if-not-string';
import { isArray } from '@writetome51/is-array-not-array';
import { isObject } from '@writetome51/is-object-not-object';

// This function is intended to be used by subclasses of PublicArrayContainer
// that have methods called .byType() and .byTest().
// It's meant to be called inside the definition of .byType() inside those classes.

export function _publicArrayContainer_byType_implementation(
	type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined' | 'null',
	instance: {
		byTest: (testFunction: (item: any, index?: number, array?: any[]) => boolean) => any
	}
): any {
	errorIfNotString(type);
	// @ts-ignore
	type = type.toLowerCase();

	// @ts-ignore
	if (['array', 'object', 'null'].includes(type)) {
		if (type === 'array') return instance.byTest((item) => isArray(item));
		if (type === 'object') return instance.byTest((item) => isObject(item));
		if (type === 'null') return instance.byTest((item) => item === null);
	}
	else return instance.byTest((item) => typeof item === type);
}
