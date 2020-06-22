require('dotenv').config();
const { GRAPI } = require('./goodreads');

const grapi = new GRAPI({ dumpXML: false });

async function doit() {
  var thing = undefined;
  const DREW_HAYES_ID = 7077654;
  const ANDY_HOPP_ID = 42705;
  const JA_USER_ID = 93029742;
  const DUNE_SERIES_ID = 45935;

  thing = await grapi.seriesList(DREW_HAYES_ID);
  // thing = await grapi.seriesShow(DNUE_SERIES_ID);
  // thing = await grapi.authorShow(ANDY_HOPP_ID, 1);
  // thing = await grapi.authorBooks(ANDY_HOPP_ID, 1);
  // thing = await grapi.reviewList(JA_USER_ID, 'gaming', 999);
  // thing = await grapi.shelfList(JA_USER_ID, 1);
  // TODO OAUTH thing = await grapi.ownedBooksList(JA_USER_ID, 1);

  console.log(JSON.stringify(thing, null, 1));
}

doit();