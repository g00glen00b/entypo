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
        htmlDemoTemplate: 'src/site/templates/entypo.tpl.html',
        destHtml: 'dist/demo',
        engine: 'fontforge',
        autoHint: false,
        descent: -50,
        fontHeight: 1000
      },
      entypoPlus: {
        src: 'src/svg/entypo-plus/*.svg',
        dest: '<%= webfont.dest %>',
        destCss: '<%= webfont.destCss %>',
        options: {
          font: 'EntypoPlus'
        }
      },
      entypo: {
        src: 'src/svg/entypo/*.svg',
        dest: '<%= webfont.dest %>',
        destCss: '<%= webfont.destCss %>',
        options: {
          font: 'Entypo'
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
    },
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 8080,
          livereload: 8081,
          base: './',
          open: 'http://localhost:<%= connect.server.options.port %>/dist/demo/'
        }
      }
    },
    copy: {
      resources: {
        cwd: 'src/site/',
        src: ['*.html', 'js/**', 'css/**'],
        dest: 'dist/demo/',
        expand: true
      }
    },
    watch: {
      resources: {
        files: ['Gruntfile.js', 'src/**/*'],
        tasks: ['clean:dist', 'mkdir:htmlDist', 'webfont:entypo', 'webfont:entypoPlus', 'copy:resources', 'cssmin:icons'],
        options: {
          livereload: '<%= connect.server.options.livereload %>',
          atBegin: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['mkdir:htmlDist', 'webfont:entypo', 'webfont:entypoPlus', 'copy:resources', 'cssmin:icons']);
  grunt.registerTask('serve', ['mkdir:htmlDist', 'connect:server', 'watch:resources']);
};
