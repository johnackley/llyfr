class AuthorRef {
  constructor(data) {
    // console.log('author data:', data);
    this.id = data.id[0];
    this.name = data.name[0];
    // console.log('parsed author-ref:', this)
  }
}

module.exports = { AuthorRef };

// id: string; // 5198410
// name: string; // Grant Snider
