import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp()

  exports.onOrderCreate = functions.database.ref('/AllOrders/{orderId}')
    .onCreate((snapshot, context) => {
     
      console.log('this is new order created key: ', context.params)
        const orderData = snapshot.val()
        console.log('data: ', orderData.lat+'  '+orderData.lng)

        let output = admin.database().ref('/WasherTeams').once('value', (snapshot2) => {
        

              
              snapshot2.forEach((child) => {
                  console.log(child.key, child.val())
                  let data = child.val()
                  console.log('the latlng of washers'+data.teamLat+'  '+ data.teamLng)
                   
                 
                  console.log("this is foreach")
                })
              
          })
  
      return output
    })
