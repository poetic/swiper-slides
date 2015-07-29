var PM = Meteor.Poetic.Formaldehyde; // param manager

Template.swiperSlides.onCreated(function(){
  var template = this;
  var param = (template.data && template.data.param);

  if (param) {
    PM.register(param, function(val, state, done){
      var el = template.$('.swiper-container')[0];

      if (val && val !== el.swiper.activeIndex.toString()) {
        el.swiper.slideTo(val);
      }

      done();
    });
  }
});

Template.swiperSlides.onRendered(function(){
  var options = (this.data && this.data.options) || {};
  var defaults = {};

  if (this.data && this.data.param) {
    options.initialSlide = setInitialSlide.call(this, options);
    defaults = { onTransitionEnd: onTransitionEnd.bind(this) };
  }

  this.$('.swiper-container').swiper(_.extend(options, defaults));
});

Template.swiperSlides.onDestroyed(function(){
  var param = (this.data && this.data.param);

  if (param) { PM.deregister(param) }
});

function onTransitionEnd (e){
  var param = this.data.param;
  var currentSlide = e.activeIndex.toString();

  if (PM.get(param) !== currentSlide) {
    PM.set(param, currentSlide);
  }
};

function setInitialSlide (options){
  var param = this.data.param;
  var paramIndex = PM.get(param);
  var initial;

  if (paramIndex) {
    return paramIndex;

  } else {
    initial = options.initialSlide;
    PM.set(param, initial || '0', true);

    return initial;
  }
};
