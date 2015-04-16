module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {
      dest: 'dist/fonts',
      destCss: 'dist/css',
      options: {
        types: ['eot', 'woff', 'ttf', 'svg'],
        styles: ['font', 'icon'],
        syntax: 'bootstrap',
        hashes: false,
        order: ['eot', 'woff', 'ttf', 'svg'],
        stylesheet: 'css',
        relativeFonthPath: '../fonts',
        htmlDemo: true,
        destHtml: 'dist/html',
        engine: 'fontforge',
        autoHint: false
      },
      entypoPlus: {
        src: 'src/svg/entypo-plus/*.svg',
        dest: '<%= webfont.dest %>',
        destCss: '<%= webfont.destCss %>',
        options: {
          font: 'EntypoPlus',
          htmlDemoTemplate: 'src/html/entypo-plus.tpl.html',
          fontHeight: 20
        }
      },
      entypo: {
        src: 'src/svg/entypo/*.svg',
        dest: '<%= webfont.dest %>',
        destCss: '<%= webfont.destCss %>',
        options: {
          font: 'Entypo',
          htmlDemoTemplate: 'src/html/entypo.tpl.html',
          descent: 150,
          fontHeight: 1000
        }
      }
    },
    cssmin: {
      icons: {
        files: [{
          expand: true,
          cwd: '<%= webfont.destCss %>',
          src: ['*.css'],
          dest: '<%= webfont.destCss %>',
          ext: '.min.css'
        }]
      }
    },
    mkdir: {
      htmlDist: {
        options: {
          create: ['<%= webfont.options.destHtml %>']
        }
      }
    },
    clean: {
      dist: {
        src: ['dist/']
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('build', ['mkdir:htmlDist', 'webfont:entypo', 'webfont:entypoPlus', 'cssmin:icons']);
};
