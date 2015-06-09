Template.swiperSlides.onRendered(function(){
  var options = this.data.options;
  var defaults = {};

  if (this.data && this.data.param) {
    options.initialSlide = setInitialSlide.call(this);
    defaults = { onTransitionEnd: onTransitionEnd.bind(this) };
  }

  this.$('.swiper-container').swiper(_.extend(options, defaults));

    // can only be set up after the above initialization
  if (this.data && this.data.param) {
    watchParam.call(this);
  }
});

function onTransitionEnd (e){
  var param = this.data.param;
  var currentSlide = e.activeIndex.toString();

  if (Iron.query.get(param) !== currentSlide) {
    Iron.query.set(param, currentSlide);
  }
};

function setInitialSlide (){
  var param = this.data.param;
  var paramIndex = Iron.query.get(param);
  var initial;

  if (paramIndex) {
    return paramIndex;
  } else {
    initial = this.data.options.initialSlide;
    Iron.query.set(param, initial || '0');

    return initial;
  }
};

function watchParam (){
  var template = this;

  Template.instance().autorun(function(){
    var el = template.$('.swiper-container')[0];
    var param = template.data.param;
    var index = Iron.controller().getParams().query[param];

    if (index !== el.swiper.activeIndex.toString()) {
      el.swiper.slideTo(index);
    }
  });
};
