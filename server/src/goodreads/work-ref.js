class WorkRef {
  constructor(data) {
    // console.log('work-ref data:', data);
    this.id = data.id[0];
    this.uri = data.uri[0];
    // console.log('parsed work-ref:', this);
  }
}

module.exports = { WorkRef };

// id: string; // 72611000 
// uri: string; // kca://work/amzn1.gr.work.v2.142315cc-55d5-4113-b77a-cf484ecf223d
