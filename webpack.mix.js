const mix = require('laravel-mix');

mix.sass('src/sass/app.scss', 'dist/css/')
    .options({
      	processCssUrls: false
   	});