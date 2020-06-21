class ImageURL {
  constructor (data) {
    // console.log('imageURL data:', data);
    this.url = data.url;
    if (this.nophoto) {
      this.nophoto = data.nophoto === 'true';
    }
  }
}

module.exports = { ImageURL };

// url: string;
// nophoto = false;
