eyepatch.js
======

A cleaner way than anonymous functions, or function.bind, to get a reference to a function with supplied parameters.

Looks like a dude with an eyepatch.

```
function () {
  return yourFunc(args);
}
```

is sort of like

```
yourFunc.bind(null, args)
```

but looks much better as

```
yourFunc._(args)
```



Compatibility
-------------

Definitely probably works with some versions of Chrome

Why would I want to do this?
----------------------------

A good example would be simplifying the chaining of functions with jQuery.Deferred (how can you tell this is exactly why I wrote this plugin?).

Take this sleep function:

```
var sleep = function(duration) {
  return $.Deferred(function(){
    setTimeout(this.resolve, duration)
  }).promise()
}
```

And then compare

```
$.when(sleep(2000))
  .then(function() {
    alert('Welcome to the future!')
  })
  .then(sleep.bind(null,2000))
  .done(function(){
    alert('Finished.');
  })
```

with

```
$.when(sleep(2000))
  .then(alert._('Welcome to the future!')
  .then(sleep._(2000))
  .done(alert._('Finished.')
```

See, much nicer.
 
 
 
 
 
 
 
