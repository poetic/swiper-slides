Package.describe({
  name: 'poetic:swiper-slides',
  version: '0.0.1',
  summary: 'an implementation Swiper combined with Iron Router query param management',
  git: 'https://github.com/poetic/swiper-slides',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
    'iron:router@1.0.9',
    'cottz:iron-query@1.2.3',
    'lacosta:swiper@0.0.1'
  ]);

  api.addFiles([
    'swiper-slides.html',
    'swiper-slides.js'
  ], [
    'client'
  ]);

  api.imply([
    'iron:router@1.0.9',
    'cottz:iron-query@1.2.3'
  ]);

  api.export('Swiper');
});

Package.onTest(function(){});
