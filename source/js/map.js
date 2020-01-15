ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('ymap', {
      center: [59.93863223569252, 30.322965421264662],
      zoom: 16,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.93863223569252, 30.322965421264662]), {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [36, 36],
      // Смещение левого верхнего угла иконки относительно
      // её 'ножки' (точки привязки).
      iconImageOffset: [0, 0]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.options.set('scrollZoomSpeed', 1);
};
