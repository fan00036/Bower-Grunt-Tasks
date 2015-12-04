/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        //this will copy out only the min files to the www folder
        copy: {
            bootstrap_js: {
                src: 'bower_components/bootstrap/dist/js/bootstrap.js',
                dest: 'dist/js/bootstrap.js',
            },
            bootstrap_css: {
                src: 'bower_components/bootstrap/dist/css/bootstrap.css',
                dest: 'dist/css/bootstrap.css ',
            },
            fonts: {
                src: 'bower_components/components-font-awesome/*',
                dest: 'dist/fonts',
            },
            font_css: {
                src: 'bower_components/components-font-awesome/css/font-awesome.css',
                dest: 'dist/css/font-awesome.css',
            },
            jquery_js: {
                src: 'bower_components/jquery/dist/jquery.js',
                dest: 'dist/js/jquery.js',
            },
            css: {
                src: 'css/main.css',
                dest: 'dist/css/main.css',
            },
            js: {
                src: 'js/main.js',
                dest: 'dist/js/main.js',
            },
            html: {
                src: 'index.html',
                dest: 'dist/index.html',
            }
        },


        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
                }
            }
        },

        cssmin: {
            target: {

                files: {
                    'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
                }

            }
        },

        clean: {
            css: ["dist/css/*.css", "!dist/css/*.min.css"],
            js: ["dist/js/*.js", "!dist/js/*.min.js"]
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task.
    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

};