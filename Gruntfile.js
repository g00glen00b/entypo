module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {
      entypoPlus: {
        src: 'src/svg/entypo-plus/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        options: {
          types: ['eot', 'woff', 'ttf', 'svg'],
          styles: ['font', 'icon'],
          font: 'EntypoPlus',
          syntax: 'bootstrap',
          hashes: false,
          order: ['eot', 'woff', 'ttf', 'svg'],
          stylesheet: 'css',
          relativeFonthPath: '../fonts',
          htmlDemo: true,
          destHtml: 'dist/demo',
          engine: 'fontforge',
          autoHint: false,
          fontHeight: 20
        }
      },
      entypo: {
        src: 'src/svg/entypo/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        options: {
          types: ['eot', 'woff', 'ttf', 'svg'],
          styles: ['font', 'icon'],
          font: 'Entypo',
          syntax: 'bootstrap',
          hashes: false,
          order: ['eot', 'woff', 'ttf', 'svg'],
          stylesheet: 'css',
          relativeFonthPath: '../fonts',
          htmlDemo: true,
          destHtml: 'dist/demo',
          engine: 'fontforge',
          autoHint: false,
          descent: 0,
          fontHeight: 1000
        }
      }
    },
    cssmin: {
      icons: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['webfont:entypo', 'webfont:entypoPlus', 'cssmin:icons']);
};
