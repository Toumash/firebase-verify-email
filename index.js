var admin = require("firebase-admin");
var serviceAccount = require("./service-account.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

async function verifyUsersEmail(uuid) {
    const user = await admin.auth().getUser(uuid);
    // console.log(user);
    await admin.auth().updateUser(uuid, {
        emailVerified: true
    });
    console.log(`User email verified! You can log in now ${user.email}`)
}

const uuid = process.argv[2];
void verifyUsersEmail(uuid);