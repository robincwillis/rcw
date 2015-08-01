module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch: {
			handlebars : {
				files: ['templates/*.hbs'],
				tasks: ['handlebars:dist']
			},
			compass : {
				files: ['sass/*'],
				tasks: ['compass:dist']
			},
			uglify : {
				files: ['src/**/*.js'],
				tasks: ['uglify:dist', 'shell:moveMap']
			}
		},
		uglify: {
			dist: {
				options : {
					 sourceMap:  'invoice.min.map.js',
					 sourceMapRoot : '../'
				},
				files: {
					'js/invoice.min.js': [
					'src/models/*.js',
					'src/collections/*.js',
					'src/views/*.js',
					'src/*js',
					]
				}
			},
			vendor: {
				files: {
					'js/vendor.min.js' : [
					'src/lib/jquery-1.9.1.min.js',
					'src/lib/underscore-min.js',
					'src/lib/backbone-min.js',
					'src/lib/backbone-relational.js',
					'src/lib/handlebars.js',
					'src/lib/bootstrap.js',
					'src/lib/bootstrap-datepicker.js'
					]
				}
			}
		},
		compass: {
			dist: {
					options: {
						config: 'config.rb',
						sassDir: 'sass',
						cssDir: 'css',
						imagesDir: 'img'
					}
			}
		},
		handlebars: {
			dist:{
				options : {
						namespace : "invoice.Templates",
						processName: function(filePath) { // input:  templates/header.hbs
							var pieces = filePath.split("/");
							var nameWithExtension = pieces[pieces.length-1].split(".");
							return nameWithExtension[0]; // output: header
						}
				},
				files: {
					"js/templates.js": "templates/*.hbs"
				}
			}
		},
		shell:{
			moveMap:{
				command : 'mv invoice.min.map.js js/invoice.min.map.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('dev', ['build','watch']);
	grunt.registerTask('build', ['uglify:vendor','uglify:dist', 'shell:moveMap' ,'compass', 'handlebars']);
	//grunt.registerTask('deploy', ['build','shell:clean', 'shell:release','shell:publish']);
	//grunt.registerTask('clean', ['shell:clean']);
	grunt.registerTask('default',['dev']);

};