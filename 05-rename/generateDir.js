var sh = require('shelljs');
var _ = require('lodash');

var topLevel = 'test';

sh.mkdir(topLevel);
sh.cd(topLevel);

sh.mkdir([
    'config',
    'directives',
    'html'
]);

_.forEach([
        'About myModule.txt',
        'myModule.controller.js',
        'myModule.module.js',
        'myModule.routes.js',
        'config/myModule.config.js',
        'directives/myModule.directives.js',
        'html/myModule.body.jade',
        'html/myModule.head.jade',
        'html/myModule.partials.footer.jade',
        'html/myModule.partials.header.jade'
    ], function(path) {
        ' '.to(path);
    }
);
