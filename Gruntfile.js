module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> (v<%= pkg.version %>) <%= grunt.template.today("mm/dd/yyyy") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.directive.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

}