"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_string_1 = require("error-if-not-string");
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var is_object_not_object_1 = require("@writetome51/is-object-not-object");
// This function is intended to be used by subclasses of PublicArrayContainer
// that have methods called .byType() and .byTest().
// It's meant to be called inside the definition of .byType() inside those classes.
function _publicArrayContainer_byType_implementation(type, instance) {
    error_if_not_string_1.errorIfNotString(type);
    // @ts-ignore
    type = type.toLowerCase();
    // @ts-ignore
    if (['array', 'object', 'null'].includes(type)) {
        if (type === 'array')
            return instance.byTest(function (item) { return is_array_not_array_1.isArray(item); });
        if (type === 'object')
            return instance.byTest(function (item) { return is_object_not_object_1.isObject(item); });
        if (type === 'null')
            return instance.byTest(function (item) { return item === null; });
    }
    else
        return instance.byTest(function (item) { return typeof item === type; });
}
exports._publicArrayContainer_byType_implementation = _publicArrayContainer_byType_implementation;
