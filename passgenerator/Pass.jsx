import React, { useEffect, useState } from "react";
import "./src/Password.css";

function Pass() {
  let [pass, setPass] = useState("Click on generate button");
  let [check, setCheck] = useState("");

  let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr1 = cap.split("");
  console.log(arr1);
  let finalPassword = [];
  let capital;
  let r;

  let clettter;
  function generate() {
    r = Math.random();
    capital = Math.floor(r * 26);
    clettter = arr1[capital];
    console.log(clettter);
    finalPassword.push(clettter);
    console.log(clettter);
  }

  let small_letter;
  let sletters = "abcdefghijklmnopqrstuvwxyz";
  let arr2 = sletters.split("");
  let small;
  function generateSmallL() {
    for (let i = 0; i < 4; i++) {
      r = Math.random();
      small = Math.floor(r * 26);
      small_letter = arr2[small];
      finalPassword.push(small_letter);
      console.log(small_letter);
    }
  }

  let no = "0123456789";
  let arr3 = no.split("");
  let number;

  function generateNumbers() {
    for (let i = 0; i <= 1; i++) {
      r = Math.random();
      number = Math.floor(r * arr3.length);
      console.log(number);
      finalPassword.push(number);
      // console.log( finalPassword.push(number));
    }
  }

  let schar;
  let char = "!@#$%^&*";
  let arr4 = char.split("");
  let specialChar;
  function splChar() {
    r = Math.random();
    specialChar = Math.floor(r * char.length);

    schar = arr4[specialChar];
    console.log(schar);
    finalPassword.push(schar);
  }
  let final;
  function addFun() {
    generate();

    generateSmallL();
    splChar();
    generateNumbers();
    final = finalPassword.join("");
    console.log(final);
    setPass(finalPassword.join(""));
    finalPassword = [];
  }

  for (let i = 0; i < finalPassword.length; i++) {
    if (
      final[i] == clettter &&
      final[i] == small_letter &&
      final[i] == schar &&
      final[i] == number
    ) {
      console.log("successful");
    } else {
      console.log("not");
    }
  }

  return (
    <>
      <h2>Password Generator</h2>
      <div className="main">
        <input
          type="text"
          placeholder="click on generate button"
          className="inputfield"
          value={pass}
          readOnly
        />
        <button type="button" className="genbutton" onClick={() => addFun()}>
          GENERATE
        </button>

        <input type="text" placeholder="enter" className="checkinput" />
        <div>
          <button type="button" className="checkbutton">
            Check
          </button>
        </div>
      </div>
    </>
  );
}
export default Pass;
