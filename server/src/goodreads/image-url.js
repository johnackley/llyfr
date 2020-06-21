class ImageURL {
  constructor (data) {
    // console.log('imageURL data:', data);
    // TODO this is still buggy thanks to inconsistent from GR
    if (data.url) {
      if (data.url['_']) {
        this.url = data.url['_'];
      } else {
        this.url = data.url;
      }
    } else if (data.uri) {
      if (data.uri['_']) {
        this.url = data.uri['_'];
      } else {
        this.url = data.uri;
      }
    } else {
      this.url = data;
    }
    if (this.nophoto) {
      this.nophoto = data.nophoto === 'true';
    }
    // console.log('parsed image-url:', this)
  }
}

module.exports = { ImageURL };

// url: string;
// nophoto = false;
