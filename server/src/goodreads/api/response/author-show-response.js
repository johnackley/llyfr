const { ImageURL } = require('../../image-url');
const { Book } = require('../../book');

class AuthorShowResponse {
  constructor(data) {
    // console.log('author data:', data.author[0]);
    if (data.Request[0].method[0] !== 'author_show') { throw('wrong request.method'); }
    this.id = data.author[0].id[0];
    this.name = data.author[0].name[0];
    this.link = data.author[0].link[0];
    this.image_url = new ImageURL(data.author[0].image_url[0]);
    this.small_image_url = new ImageURL(data.author[0].small_image_url[0]);
    this.large_image_url = new ImageURL(data.author[0].large_image_url[0]);
    this.fans_count = parseInt(data.author[0].fans_count[0]['_'], 10);
    this.author_followers_count = parseInt(data.author[0].author_followers_count[0]['_'], 10);
    this.about = data.author[0].about[0];
    this.influences = data.author[0].influences[0];
    this.works_count = parseInt(data.author[0].works_count[0], 10);
    this.gender = data.author[0].gender[0];
    this.hometown = data.author[0].hometown[0];
    this.born_at = data.author[0].born_at[0];
    this.died_at = data.author[0].died_at[0];
    this.goodreads_author = data.author[0].goodreads_author[0];
    this.userId = data.author[0].user[0].id[0]['_'];
    this.books = data.author[0].books[0].book.map(x => new Book(x));
    // console.log('parsed author:', this);
  }
}

module.exports = { AuthorShowResponse };

// <id>42705</id>
// <name>Andy Hopp</name>
// <link><![CDATA[https://www.goodreads.com/author/show/42705.Andy_Hopp]]></link>
// <fans_count type="integer">19</fans_count>
// <author_followers_count type="integer">19</author_followers_count>
// <large_image_url><![CDATA[https://images.gr-assets.com/authors/1442451659p7/42705.jpg]]></large_image_url>
// <image_url><![CDATA[https://images.gr-assets.com/authors/1442451659p5/42705.jpg]]></image_url>
// <small_image_url><![CDATA[https://images.gr-assets.com/authors/1442451659p2/42705.jpg]]></small_image_url>
// <about></about>
// <influences></influences>
// <works_count>9</works_count>
// <gender></gender>
// <hometown></hometown>
// <born_at></born_at>
// <died_at></died_at>
// <goodreads_author>true</goodreads_author>
// <user>
//   <id type="integer">16666557</id>
// </user>
