# swiper-slides

## Installation

`meteor add poetic:swiper-slides`

## Getting Started

This package exposes a `swiperSlides` template along with the following dependencies:

```
iron:router
cottz:iron-query
lacosta:swiper
```

The `swiperSlides` template is defined in block form as follows. All parameters are optional.

```
{{#swiperSlides
  options=swiperOptions param='slide' id='main-swiper' classNames='swiper-large'
  background='swiperBackground' bgClasses='swiper-large-background' parallaxPx='100'
}}
  <div class='swiper-slide'>
    one
  </div>
  <div class='swiper-slide'>
    two
  </div>
  <div class='swiper-slide'>
    three
  </div>
{{/swiperSlides}}
```

- `options`: An initialization object passed to Swiper. You can read more about the options you can pass in [Swiper's API](http://www.idangero.us/swiper/api/#.VXcn51xViko).
- `param`: A string used to automatically manage this swiper via query param. The value of the param will always be the index of the current slide.
- `id`: A css id attached to the `swiper-container` element.
- `classNames`: A string of css class names attached to the `swiper-container` element.
- `background`: The name of a `Blaze.Template` which will be rendered dynamically as the swiper background.
- `bgClasses`: A string of css class names to apply to the swiper background.
- `parallaxPx`: A string representing the number of pixels that the swiper background will use as a parallax offset.
