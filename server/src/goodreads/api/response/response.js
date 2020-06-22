class Response {
  constructor(data) {
    // console.log('response data:', data);
    this.auth = data.GoodreadsResponse.Request[0].authentication === 'true';
    this.key = data.GoodreadsResponse.Request[0].key[0];
    this.method = data.GoodreadsResponse.Request[0].method[0];
    this.payload = data.GoodreadsResponse;
    delete this.payload.Request;
    // console.log('parsed Response:', this);
  }
}

module.exports = { Response };
