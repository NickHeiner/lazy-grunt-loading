[![Build Status](https://travis-ci.org/NickHeiner/lazy-grunt-loading.png)](https://travis-ci.org/NickHeiner/lazy-grunt-loading)

lazy-grunt-loading
==================
> Experimental utility to load grunt tasks lazily

The grunt workflow is to load all tasks for every invocation of `grunt`, then only run the ones the user actually wants. If you have a project with a ton of grunt tasks, or grunt tasks that take a long time to load, this could end up being painful. To address this pain, I've created a module that makes a few (potentially brittle) assumptions and hooks into `grunt.task.run` to only run the tasks you need. 

Old way:

**Gruntfile.js**
```js
module.exports = function(grunt) {

  // Both foo and bar will be loaded every time, even if you are not using all of them.
  grunt.loadTask('foo');
  grunt.loadTask('bar');

  grunt.initConfig() {
    foo: fooOpts,
    bar: barOpts
  }
};
```

New way: 

**Gruntfile.js**
```js
module.exports = function(grunt) {

  var lazyGruntLoading = require('lazy-grunt-loading');

      // A list of all files that could contain tasks you want to load. 
      // Getting this list is outside the scope of this module.
      // Ex: ['node_modules/foo/tasks/grunt-foo.js', 'tasks/file_name.js']
  var taskFiles = getTaskFiles(),
  
      // Optional: Not every grunt task is declared in a file of the same name. 
      // Pass an override here to get around this. This is not necessary if 
      // the only difference is the file having the 'grunt-' prefix - that
      // will get handled automatically. In this example, we see above that
      // taskFiles has 'tasks/file_name.js', which defines the 'bar' task,
      // so we add that override here.
      overrides = { file_name: 'bar'},
      
      // Optional: function to use for logging
      log = grunt.verbose.write;
  
  // Only the tasks you need will be loaded.
  lazyGruntLoading(grunt, taskFiles, overrides, log);

  // Config proceeds as it normally would.
  grunt.initConfig() {
    foo: fooOpts,
    bar: barOpts
  }
};
```

This could ultimately be a bad idea, but I'd like to experiment with it. Because parts of this are brittle, and getting the list of all files a task could be declared in is a burden, I don't recommend using this module unless your task load time is getting painful.
