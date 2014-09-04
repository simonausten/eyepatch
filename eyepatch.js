/**
  * Eyepatch.js
  *
  * A cleaner way than function.bind to
  * get a reference to a function with
  * supplied parameters
  *
  * Looks like a dude with an eyepatch
  * yourFunc._(args) == yourFunc.bind(null, args)
  *
**/
  

Object.defineProperty( Object.prototype, '_',
	{ value: function() {
		var self = this;
		var args = arguments;
		return function() {
			return self.apply(null,args);
		}
	   },
	  enumerable: false
	}
)
