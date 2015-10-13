Package.describe({
  name: 'poetic:swiper-slides',
  version: '0.0.4',
  summary: 'an implementation Swiper combined with formaldehyde query param management',
  git: 'https://github.com/poetic/swiper-slides',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
    'lacosta:swiper@0.0.1',
    'poetic:formaldehyde@0.1.2'
  ]);

  api.addFiles([
    'swiper-slides.html',
    'swiper-slides.js'
  ], [
    'client'
  ]);

  api.imply([
    'poetic:formaldehyde@0.1.2'
  ]);

  api.export('Swiper');
});

Package.onTest(function(){});
