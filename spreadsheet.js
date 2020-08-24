const {google} = require('googleapis');

const creds = require('./client_secret.json');

const client = new google.auth.JWT(
  creds.client_email, null,
  creds.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
  if(err){
    console.log(err);
    return;
  } else{
    console.log('Connected');
    gsrun(client);
  }
});

async function gsrun (cl){
  //connect to my google sheets api (gsapi)
  const gsapi = google.sheets({version: 'v4', auth: cl}); 
  // Testeando si anda el get
  const option = {
    spreadsheetId: '1uoatugWpizmGG5WQ_EdvHrlWWYgIQqGnYgjmxFouV5w',
    range: 'Data!A2:D2'
  };
  let data = await gsapi.spreadsheets.values.get(option);
  let dataArray = data.data.values;
  console.log(dataArray);

  //Testeando el update
  const updateOpt = {
    spreadsheetId: '1uoatugWpizmGG5WQ_EdvHrlWWYgIQqGnYgjmxFouV5w',
    range: 'Data!A4',
    valueInputOption: 'USER_ENTERED',
    resource: {values: dataArray}
  };

  let res = await gsapi.spreadsheets.values.update(updateOpt);
}