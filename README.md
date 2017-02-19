## Best Blog Ever: A Handlebars.js exercise  

#### The Basic impementation:
1. Create a blog page with three short articles
1. Store each article's title, author, copy/content, and published date in an object in a json file
1. The blog page should be a handlebars template that will be bound to the json data

Use the following `Gruntfile.js` configuration in order to precompile your template(s). Be sure to match/update this info to match your project's file structure

```
module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    browserify: {
      js: {
          src: ['../js/quiz.js'],
          dest: '../dist/app.js'
      },
      options: {
          transform: ['hbsfy'],
          browserifyOptions: {
          paths: [
            "./node_modules"
            ]
          }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
```

#### Stretch goal #1  
Create a partial to display a navbar and a footer for your site. Include them in your blog page template.

#### Stretch goal #2
1. Add a helper function that allows your template to add today's date to each article instead of the date from the json file
1. Add a "more posts" button to your page that reuses the template, but binds it to a second set of articles data