module.exports = function(grunt) {
	var transport = require('grunt-cmd-transport');
	var script = transport.script.init(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		/*处理依赖*/
		transport: {
			options: {
				parsers: {
					'.js': [script.jsParser]
				}
			},
			jquery:  {
				options: {
					paths: ['.'],
					include: 'relative'
				},
				files : [{
					cwd: "base",
					src: "**/*.js",
					dest: ".build/"
				}]
			}
		},
		/*合并*/
		concat: {
			options: {
				paths: ['.'],
				include: 'relative'
			},
			jquery: {
				files: [{
					expand: true,
					cwd: '.build/',
					src: ['**/*.js'],
					dest: './',
					ext: '.js'
				}]
			}
		},
		/*压缩*/
		uglify: {
			jquery: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
				},
				files: [{
					expand: true,
					cwd: "./",
					src: ["1.10/jquery.js", '!1.10/jquery-debug.js'],
					dest: './',
					ext: '.js'
				}]
			}
		},
		/*清除.build文件*/
		clean: {
			build: ['.build']
		}
	});
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
};