require('dotenv').config();
const { GRAPI } = require('./goodreads');

const grapi = new GRAPI({ dumpXML: false, noparse: false });

const DREW_HAYES_ID = 7077654;
const ANDY_HOPP_ID = 42705;
const JA_USER_ID = 93029742;
const DUNE_SERIES_ID = 45935;
const DUNE_WORK_ID = 3634639;

async function doit(n) {
  switch (n) {
  case 1: return await grapi.seriesWork(DUNE_WORK_ID);
  case 2: return await grapi.seriesList(DREW_HAYES_ID);
  case 3: return await grapi.seriesShow(DUNE_SERIES_ID);
  case 4: return await grapi.authorShow(ANDY_HOPP_ID, 1);
  case 5: return await grapi.authorBooks(ANDY_HOPP_ID, 1);
  case 6: return await grapi.reviewList(JA_USER_ID, 'gaming', 999);
  case 7: return await grapi.shelfList(JA_USER_ID, 1);
  case 8: return await grapi.ownedBooksList(JA_USER_ID, 1); // TODO OAUTH
  }
  return new Promise(function(resolve, reject) { reject('bad option'); });
}

for (let i = 1; i < 8; i++) { 
  doit( i ).then(thing => {
    if (thing) console.log(JSON.stringify(thing, null, 1));
  });
}
// doit( 4 ).then(thing => {
//   if (thing) console.log(JSON.stringify(thing, null, 1));
// });
