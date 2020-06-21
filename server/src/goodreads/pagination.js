class Pagination {
  constructor(data) {
    // console.log('pagination data:', data);
    this.start = parseInt(data.start, 10);
    this.end = parseInt(data.end, 10);
    this.total = parseInt(data.total, 10);
  }
}

module.exports = { Pagination };

// start: number; // "1"
// end: number; // "9"
// total: number; // "9"
