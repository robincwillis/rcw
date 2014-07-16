module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch: {
			handlebars : {
				files: ['assets/templates/*.hbs'],
				tasks: ['handlebars:dist']
			},
			compass : {
				files: ['src/sass/*'],
				tasks: ['compass:dist']
			},
			uglify : {
				files: ['src/js/*.js'],
				tasks: ['uglify:dist']
			},
			jekyll : {
				files: ['src/css/*.css','src/**/*.html','src/**/*.md','src/**/*.js'],
				tasks: ['jekyll:dev']
			}
		},
		uglify: {
			dist: {
				options : {
					sourceMap: function (path) {
						return 'application.min.js.map';
					}
				},
				files: {
					'src/js/application.min.js': [
					'src/js/*js',
					]
				}
			},
			vendor: {
				files: {
					'js/vendor.js' : [
					'vendor/js/jquery-1.9.1.min.js',
					'vendor/js/bootstrap.js',
					'vendor/js/underscore.js',
					'vendor/js/handlebars.js'
					]
				}
			}
		},
		compass: {
			dist: {
					options: {
						//config: 'config.rb',
						sassDir: 'src/sass',
						cssDir: 'src/css',
						imagesDir: 'assets/img',
						outputStyle: 'compressed'
					}
			}
		},

		jekyll: {
			server : {
				src : 'src',
				dest: 'development',
				server : true,
				server_port : 8000,
				auto : true
			},
			dev: {
				src: 'src',
				dest: 'development'
			},
			prod: {
				src: 'src',
				dest: 'production'
			}
		},

		handlebars: {
			dist:{
				options : {
						namespace : "app.Templates",
						processName: function(filePath) { // input:  templates/header.hbs
							var pieces = filePath.split("/");
							var nameWithExtension = pieces[pieces.length-1].split(".");
							return nameWithExtension[0]; // output: header
						}
				},
				files: {
					"vendor/js/templates.js": "assets/templates/*.hbs"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('dev', ['build','watch']);
	grunt.registerTask('build', ['uglify:vendor','uglify:dist', 'compass', 'jekyll:dev']);
	grunt.registerTask('default',['dev']);
	grunt.registerTask('deploy',[]);

};


