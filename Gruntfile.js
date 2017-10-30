'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
      akp_devnotes: {
          options: {
            dest: 'destination/paterns-par',
            excludeComponents: ['devNotes', 'message', 'position', 'transition', 'utilities'],
            partialsTemplate:'app/devnotes-template.html',
            one2one: false            
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
    grunt.registerTask('default', ['akp_devnotes']);
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-akp-devnotes');
}