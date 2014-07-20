﻿interface Array<T> {
    /**
     * Returns the first element of an array that matches the predicate.
     * 
     * @param predicate The Predicate function.
     * @return The first element that matches the predicate.
     */
    first(predicate?: (value: T) => boolean): T;
}

module TypeDocs.PolyFills {
    "use strict";

    function first<T>(predicate?: (value: T) => boolean): T {
        var length: number = this.length,
            i: number,
            value: any;

        if (length === 0) {
            return null;
        }

        if (predicate === undefined) {
            return this[0];
        }

        for (i = 0; i < length; i++) {
            value = this[i];
            if (predicate(value) === true) {
                return value;
            }
        }

        return null;
    }

    if (!Array.prototype.first) {
        Array.prototype.first = first;
    }
}
