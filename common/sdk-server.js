const admin = require('firebase-admin')
// const grpc = require('grpc')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.SERVICE_JSON)),
  })
}

const db = admin.firestore()
if (!admin.apps.length) {
  // db.settings({ grpc })
}

module.exports = {
  getData(userId) {
    return db
      .collection('data')
      .doc(userId)
      .get()
      .then((snapshot) => {
        return snapshot.data()
      })
  },
  updateData(userId, data) {
    return db.collection('data').doc(userId).set(data)
  },
}
