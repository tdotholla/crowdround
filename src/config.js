
export const fbConfig = {
  apiKey: "AIzaSyCtJIQ3A47Ynn0-7Fc82_uc_z4MaPAYO5U",
  authDomain: "crowdround-17e77.firebaseapp.com",
  databaseURL: "https://crowdround-17e77.firebaseio.com",
  projectId: "crowdround-17e77",
  storageBucket: "crowdround-17e77.appspot.com",
  messagingSenderId: "302034810301",
  appId: "1:302034810301:web:84d012bfe39bba9c"
}

  // ======================================================
  // Redux + Firebase Config (react-redux-firebase & redux-firestore)
  // ======================================================
  
// Overrides for for react-redux-firebase/redux-firestore config
export const rrfConfig = {
  userProfile: 'members', // root that user profiles are written to
  updateProfileOnLogin: false, // enable/disable updating of profile on login
  presence: 'presence', // list currently online users under "presence" path in RTDB
  sessions: null, // Skip storing of sessions
  enableRedirectHandling: false, //prevent next is undefined error
  enableLogging: false, // enable/disable Firebase Database Logging
  profileDecorator: (userData) => ({ email: userData.email }) 
}

export default {
  fbConfig,
  rrfConfig
}