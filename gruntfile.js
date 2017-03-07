module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

        copy: {
            task0: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },

        concat: {
            dist: {
                src: [
                    'src/js/*.js',
                ],
                dest: 'src/js/production.js',
            }
        },

        uglify: {
            dist: {
                src: [
                    'src/js/production.js',
                ],
                dest: 'dist/js/production.min.js'
            }
        },

        cssmin: {
            css: {
                files: {
                    'dist/css/style.min.css': ['src/css/*.css'],
                }
            }
        },

        // working
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5,
                    progressive: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: '**/*.{JPG,JPEG,jpeg,jpg}',
                    dest: 'dist/img/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            },
            dev: { //for development
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', '> 5%']
            },
            no_dest: {
                src: 'dist/css/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['copy:task0', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'htmlmin', /*'imagemin',(just copying and nit minifying images)*/ 'usemin', 'autoprefixer']);
};
