# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adamtranquilla/lotide`

**Require it:**

`const _ = require('@adamtranquilla/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first item in array
* `tail(...)`: returns every item after the first in an array
* `middle(...)`: returns the middle item(s) of an array
* `countLetters(...)`: counts all letters in a string
* `countOnly(...)`: counts only specified letters in a string
* `eqArrays(...)`: determines if arrays are equivalent in content type and value
* `eqObjects(...)`: determines if objects are equivalent in content type and value
* `findKey(...)`: Finds the key
* `findKeyByValue(...)`: Finds the key for a searchable value
* `flatten(...)`: Flattens a array with nested arrays
* `letterPositions(...)`: Returns the letter position of a target letter
* `map(...)`: Utilizies mapping Callbakcs
* `takeUntil(...)`: Returns array items up until a target value
* `without(...)`: Removes a target value