


//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {

  if(msg.name == "fetchWords"){


   
   const dateStr = new Date().toISOString().slice(0, 10); 
   const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr +'&api_key='+'1y20w8mne0z1cnpihdn325i11vuzw3hx5yr04pxanjpv8eatp';
   
    
    console.log(apiCall);
    //We call api..
    //wait for response..
    //send the response...

    //fetch(..).await...

   

    fetch(apiCall).then(function(res)
    {
            if(res.status !== 200)
            {
              response({word:'Error' , desc:'There was a problem loading the wordy'});
              return;
            }

            res.json().then(function(data)
            {
              response({word: data.word, desc: data.note});
            });

          }).catch(function(err)
          {
            response({word:'Error',desc:'There was a problem loading the wordy'});
          });

        }


          return true;


      });

  