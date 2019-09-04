import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';

// admin.initializeApp()
// export const getLahoreWeather = functions.https.onRequest((request, response) => {
//     admin.firestore().doc('weather/lahore').get()
//     .then(snapshot=>{
//         const data = snapshot.data()
//         response.send(data)
//     })
//     .catch(error =>{
//         console.log(error)
//         response.status(500).send(error)
//     })
// })
// exports.onOrderCreate = functions.database.ref('/AllOrders')
//     .onCreate((snapshot, context) => {   
//       console.log('New Order Capture ', context.params.pushId);
//     });
exports.onOrderCreate = functions.database.ref('/AllOrders/{orderId}')
    .onCreate((snapshot, context) => {

      console.log('this is order created')
      return snapshot.ref.child('name').toString
    })