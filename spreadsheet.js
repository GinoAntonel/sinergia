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
    starterPiont(client, 'ss')
  }
});
async function starterPiont(cliente, aDatos){
  gsrun(cliente, aDatos);
}

async function gsrun (cl, da){
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
  let dataArrayTest = [[da, 'cara e naipe']];
  //Testeando el update  
  const updateOpt = {
    spreadsheetId: '1uoatugWpizmGG5WQ_EdvHrlWWYgIQqGnYgjmxFouV5w',
    range: 'Data!A4',
    valueInputOption: 'USER_ENTERED',
    resource: {values: dataArrayTest},
  };

  let res = await gsapi.spreadsheets.values.update(updateOpt);

}
function callingVuejsFunction(data) {
  console.log('hakunaMatata');
  var event = new CustomEvent("hakunaMatata",{ 
      detail:  {
          message: "naiveTechNoobs",
          info: data
  }});
}