const{file} = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        less:{
            //configurando ambiente de desenvolvimento!
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dev/scripts/main.min.js' :'src/scripts/main.js'
                }
            }
        }






    })

    //adicionando plugins!
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //criandoTasks!
    grunt.registerTask('default',['less', 'uglify']);
}