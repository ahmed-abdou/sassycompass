module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				}//files
			}//my_target
		}//uglify
	})//initconfig
}//exports