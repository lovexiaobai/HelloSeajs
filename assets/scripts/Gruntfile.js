module.exports = function(grunt) {
	// var transport = require('grunt-cmd-transport');
	// var style = transport.style.init(grunt);
	// var text = transport.text.init(grunt);
	// var script = transport.script.init(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		/*处理依赖*/
		transport: {
			options: {
				paths: ['.'],
				// parsers: {
				// 	'.js': [script.jsParser],
				// 	'.css': [style.css2jsParser],
				// 	'.html': [text.html2jsParser]
				// },
				/*处理别名配置*/
				alias: {
					'jquery': 'jquery'
				}
			},
			testApp:  {
				options: {
					idleading: "appjs/"
				},
				files : [{
					cwd: "application",
					src: "**/*.js",
					filter: 'isFile',
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
			testApp: {
				files: [{
					expand: true,
					cwd: '.build/',
					src: ['**/*.js'],
					dest: 'appjs/',
					ext: '.js'
				}]
			}
		},
		/*压缩*/
		uglify: {
			testApp: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
				},
				files: [{
					expand: true,
					cwd: "appjs",
					src: ["**/*.js", '!**/*-debug.js'],
					dest: 'appjs/',
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