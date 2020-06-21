class UserShelf {
  constructor(data) {
    // console.log('user-shelf data:', data);
    this.id = data.id[0]['_'];
    this.name = data.name[0];
    this.book_count = parseInt(data.book_count[0]['_']);
    this.exclusive_flag = data.exclusive_flag[0]['_'] === 'true';
    this.sort = data.sort[0]['$'] ? (data.sort[0]['$'].nil === 'true' ? undefined : data.sort[0]['_']) : undefined;
    this.order = data.order[0]['$'].nil !== 'true' ? '' : data.order[0]['_'];
    this.per_page = data.per_page[0]['$'].nil === 'true' ? undefined : parseInt(data.per_page[0]['_']);
    this.display_fields = data.display_fields[0];
    this.featured = data.featured['_'] === true;
    this.recommend_for = data.recommend_for['_'] === true;
    this.sticky = data.sticky[0]['$'].nil === 'true' ? undefined : data.sticky[0]['_'] === 'true';
    // console.log('parsed:', this);
  }
}

module.exports = { UserShelf };

// <id type="integer">302365042</id>
// <name>read</name>
// <book_count type="integer">823</book_count>
// <exclusive_flag type="boolean">true</exclusive_flag>
// <sort></sort>
// <order nil="true"/>
// <per_page type="integer" nil="true"/>
// <display_fields></display_fields>
// <featured type="boolean">true</featured>
// <recommend_for type="boolean">false</recommend_for>
// <sticky type="boolean" nil="true"/>
