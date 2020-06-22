const { SeriesWork } = require('./series-work');

class SeriesShow {
  constructor(data) {
    // console.log('series-show data:', data.series_works[0]);
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-show:', this);
  }
}

module.exports = { SeriesShow };

// id: [ '45935' ],
// title: [ '\n\n    Dune\n\n' ],
// description: [
//   '\n' +
//     '\n' +
//     '    Also known as Dune Saga, Kroniki Diuny and Dyyni.\r\n' +
//     '    \r\n' +
//     '    • <a href="/series/49401-prelude-to-dune">Prelude to Dune</a>\r\n' +
//     '    • <a href="/series/45567-legends-of-dune">Legends of Dune</a>\r\n' +
//     '    • <a href="/series/49402-heroes-of-dune">Heroes of Dune</a>\r\n' +
//     '    • <a href="/series/104537-schools-of-dune">Schools of Dune</a>\n' +
//     '\n'
// ],
// note: [ '\n\n\n' ],
// series_works_count: [ '31' ],
// primary_work_count: [ '8' ],
// numbered: [ 'true' ],
// series_works: [ { series_work: [Array] } ]
