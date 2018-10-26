module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"htdocs/assets/styles/main.css": "htdocs/assets/styles/main.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['htdocs/assets/styles/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};