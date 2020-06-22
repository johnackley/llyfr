const { Work } = require('./work');

class SeriesWork {
  constructor(data) {
    // console.log('series-work data:', data);
    this.id = data.id[0];
    this.user_position = data.user_position[0];
    this.work = new Work(data.work[0]);
    // console.log('parsed series-show:', this);
  }
}

module.exports = { SeriesWork };

// id: [ '887274' ],
// user_position: [ '1, part 1 of 2' ],
// work: [ [Object] ]
