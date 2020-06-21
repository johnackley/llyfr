class Work {
  constructor(data) {
    // console.log('work data:', data);
    this.id = data.id[0];
    this.uri = data.uri[0];
  }
}

module.exports = { Work };

// id: string; // 72611000 
// uri: string; // kca://work/amzn1.gr.work.v2.142315cc-55d5-4113-b77a-cf484ecf223d
