import config from './config';


async function getFixturesApi({ date = "", league = ""}) {
    try {
        let url = `${config.api}fixture/day/${date}`;
        if (league) {
            url += `?league=${league}`;
        }
        // Get data
        const fixturesRes = await fetch(url); 
        const fixturesRespon = await fixturesRes.json();

        return fixturesRespon
  
    } catch(err) {
      console.error('Error get fixtures', err);
    }
}


export {
    getFixturesApi
}