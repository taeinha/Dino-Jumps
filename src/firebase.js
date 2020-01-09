import * as firebase from "firebase/app";
import "firebase/database";
import * as Util from "./util";
import { merge } from "lodash";

var firebaseConfig = {
  apiKey: "AIzaSyAViPloWdU6Ia70dPK_TUi0qVmwkHUSiYQ",
  authDomain: "js-climber.firebaseapp.com",
  databaseURL: "https://js-climber.firebaseio.com",
  projectId: "js-climber",
  storageBucket: "js-climber.appspot.com",
  messagingSenderId: "470565111413",
  appId: "1:470565111413:web:846136b3f9e006e4099a3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export const writeHighScoreData = (name, time) => {
  const scoreRef = firebaseDB.ref('highscores/' + Util.randomId());
  scoreRef.set({name, time});
};

export const retrieveHighScores = (dispatch) => {
  firebaseDB.ref('highscores/').once('value').then( data => {
    const merged = [];
    data.forEach(el => {
      const obj = {"id": el.key};
      merged.push(merge({}, el.val(), obj));
    });
    dispatch(merged);
  });
};

export const removeHighScore = (id, name, time, dispatch) => {
  const ref = firebaseDB.ref("highscores/" + id);
  return ref
    .remove()
    .then(writeHighScoreData(name, time));
    // .retrieveHighScores(dispatch);
};