const { Author } = require('../../author');
const { BadMethodError } = require('../bad-method');

class AuthorShowResponse {
  constructor(data) {
    // console.log('author data:', data.author[0]);
    if (data.Request[0].method[0] !== 'author_show') { throw new BadMethod('author_show', data.Request[0].method[0]); }
    this.author = new Author(data.author[0]);
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
