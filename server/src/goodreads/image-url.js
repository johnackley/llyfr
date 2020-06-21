class ImageURL {
  constructor (data) {
    // console.log('imageURL data:', data);
    // TODO this is still buggy thanks to inconsistent from GR
    // url exists
    if (data.hasOwnProperty('url')) {
      // try '_' first
      if (data.url['_']) {
        this.url = data.url['_'].trim();
        if (data.url['$']) {
          this.nophoto = data.url['$'].nophoto === 'true';
        }
      } else {
        this.url = data.url.trim();
      }
    } else if (data.hasOwnProperty('uri')) {
      if (data.uri['_']) {
        this.url = data.uri['_'].trim();
      } else {
        this.url = data.uri.trim();
      }
    } else if (data.hasOwnProperty('_')) {
      this.url = data['_'].trim();
      this.nophoto = data['$'].nophoto === 'true';
    } else {
      this.url = data.trim();
    }
    // console.log('parsed image-url:', this)
  }
}

module.exports = { ImageURL };

// url: string;
// nophoto = false;
