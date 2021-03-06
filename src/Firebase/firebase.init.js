import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initAuthentication = ()=>{
    initializeApp(firebaseConfig)
}

export default initAuthentication;

/* 

Steps for Authentication


Step-1: Initial Setup
1. firebase create project
2. create web app
3. get config
4. init firebase
5. enable auth method 

Step-2:
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register


Step=3:
1. set up sign in method
2. set up sign out method
3. user state
4. special observer

Step-4:
1. create a auth context 
2. create context provider
3. use auth provider 
4. create useAuth Hook
*/
