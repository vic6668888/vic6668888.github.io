document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (typeof APlayer !== 'undefined') {
      new APlayer({
        container: document.createElement('div'),
        fixed: true,
        autoplay: true,
        lrcType: -1,
        audio: [{
          name: '那天下雨了',
          artist: '周杰伦',
          url: '/music/rainy-day.mp3'
        }]
      });
    }
  }, 1500);
});
