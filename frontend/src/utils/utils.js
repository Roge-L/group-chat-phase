// import { Server } from "./config";

// Import the necessary modules from the Appwrite SDK.
import { Account, Client, Databases } from "appwrite";

// Create an Appwrite client for connecting to the server.
const appwriteClient = new Client();
const appwriteAccount = new Account(appwriteClient);

// Assign the server's API endpoint and the project ID.
appwriteClient
  .setEndpoint("http://localhost/v1")
  .setProject("63de425c7c8f596e3cf5");

// Use the credentials of the react-app-user to connect
// to the Appwrite API. Replace `example-password` with
// the password you used when creating the user.
const appwriteAccountPromise = appwriteAccount.createEmailSession(
  "roger.l.jiahao2@gmail.com",
  "?X0'3.~Tz)52_Y"
);

// Have the response printed to the JavaScript console
// for debugging. You can remove this later.
appwriteAccountPromise.then(
  function(response) {
    console.log(response);
  },
  function(error) {
    console.log(error);
  }
);

// Establish the database to use via its ID. Then
// export the database object so that it can be
// imported by other parts of the React project.
export const appwriteDatabase = new Databases(
  appwriteClient,
  "63de42717421b371c652"
);
