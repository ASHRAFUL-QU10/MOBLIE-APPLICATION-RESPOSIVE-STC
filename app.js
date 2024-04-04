import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJf3kqpdCxt3i-LEg7a85TocSiz6nu3Lo",
    authDomain: "hakhathon-10793.firebaseapp.com",
    projectId: "hakhathon-10793",
    storageBucket: "hakhathon-10793.appspot.com",
    messagingSenderId: "1035416349257",
    appId: "1:1035416349257:web:ad9246319a7b635a4bed98",
    measurementId: "G-C40FNREJVV"
};
// console.log(window.location)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
onAuthStateChanged(auth, (user) => {
    if (user) {
        signUpBtn.innerHTML = 'Log out'
        localStorage.clear()
      // if()
      console.log('login')

    //   window.location.assign("index.html")
      // ...
    } else {
      console.log()
      // User is signed out
      // ...
    }
  });
let oneCall = () => {
    let logbtn = document.getElementById("logBtn");
    logbtn.addEventListener('click', () => {
        let maniContai = document.getElementById("main");
        maniContai.innerHTML = `
      <div id="errorlog">
      </div>
    <div class="white-container">
                <p class="signText">
                    Sign Up
                </p>
                <div class="Input-container">
                    <input class="user-input log-name-icon" id="getName" type="text" placeholder="Enter your name">
                    <input class="user-input email-icon" id="logEmail" type="email" placeholder="Enter your Email">
                    <input class="user-input input-key" type="password" id="logPassword" placeholder="Enter your password">
                </div>
                <button class="sign-up-btn" id="logBtn">
                    Sign Up
                </button>
                <p class="log-in" id="signBtn" >Log in</p>
               <a href="https://mail.google.com" id="verification"></a>
            </div>
    `
        let getWidth = document.querySelector(".white-container");
        getWidth.style.height = "390px"
        call()
        let logBtn = document.getElementById("logBtn");
        logBtn.addEventListener('click', () => {
            let email = document.getElementById("logEmail").value;
            let name = document.getElementById("getName").value;
            let password = document.getElementById("logPassword").value
            let nameRed = document.getElementById("getName");



















            name.trim() ?
                createUserWithEmailAndPassword(auth, email, password)
                    .then(async (userCredential) => {
                        let obj;
                        localStorage.setItem("user", JSON.stringify(obj = {
                            signEmail: email,
                            signPassword: password
                        }))
                        console.log("user create")
                        const docRef = await addDoc(collection(db, "users"), {
                            signEmail: email,
                            signPassword: password,
                            name: name,
                            img: 'https://tse1.explicit.bing.net/th?id=OIP.-kAzuAJ8vD4N8L-SCL_L3AHaHH&pid=Api&P=0&h=180'
                        });
                        console.log("Document written with ID: ", docRef.id);
                        localStorage.setItem("id",docRef.id)
                        window.location.assign("index.html")



                    })

                :
                nameRed.style.border = "2px red solid"
        });
    });
};
oneCall()
let call = () => {
    let signBtn = document.getElementById("signBtn");
    signBtn.addEventListener('click', () => {
        let main = document.getElementById("main");
        main.innerHTML = `
  <div class="white-container">
              <p class="signText">
                  Log in
              </p>
              <div class="Input-container">
                  <input class="user-input email-icon" id ="signEmail" type="email" placeholder="Enter your email" required>
                  <input class="user-input input-key" type="password" id="signPassword" placeholder="Enter your Password" required>
              </div>
              <button id="signUpBtn" class="sign-up-btn">
                  Log in
              </button>
              <p class="log-in" id="logBtn">Sign Up</p>
              <div class="otherlog">
              <p class="other-log">
                  Log in via <br>Social network</p>
              <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
              </div>
          </div>
  `
        oneCall();
        secendCall();
    });
};
let secendCall = () => {
    let signUpBtn = document.getElementById("signUpBtn");
    signUpBtn.addEventListener('click', () => {
        let signEmail = document.getElementById("signEmail");
        let signPassword = document.getElementById("signPassword");
        signInWithEmailAndPassword(auth, signEmail.value, signPassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                let obj;
                localStorage.setItem("user", JSON.stringify(obj = {
                    signEmail: signEmail.value,
                    signPassword: signPassword.value
                }))




console.log(userCredential)




                console.log("logn");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                let errorBox = document.getElementById("error");
                errorMessage == 'Firebase: Error (auth/user-not-found).' ? errorBox.innerHTML = `
          <p class="error">Ronge Email/Password</p> 
          `
                    :
                    errorMessage == 'Firebase: Error (auth/wrong-password).' ? errorBox.innerHTML = `
          <p class="error">Rong Password</p> 
          `
                        :
                        errorMessage == 'Firebase: Error (auth/invalid-email).' ? signEmail.style.border = "2px red solid"
                            :
                            errorMessage == 'Firebase: Error (auth/missing-password).' ? signPassword.style.border = "2px red solid"
                                :
                                errorMessage == 'Firebase: Error (auth/wrong-password).' ? signPassword.style.border = "2px red solid"
                                    :
                                    console.log("none")
            });
    });
};
secendCall();

