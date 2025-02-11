"use strict";
let count = 0;
let h1 = document.getElementsByTagName("h1")[0];
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");
let a = document.getElementsByTagName("a")[0];
let btn = document.getElementsByTagName("button")[0];
function langCh() {
  switch (count) {
    case 0:
      h1.innerHTML = "Tarak Program";
      h3[0].innerHTML = "Calculetor";
      h3[1].innerHTML = "Temperature Converter";
      h3[2].innerHTML = "Simple Interest";
      p[0].innerHTML = "You can calculate using calculator.";
      p[1].innerHTML = "With this you can convert from Celsius to Fahrenheit.";
      p[2].innerHTML = "You can calculate simple interest using it.";
      p[3].innerHTML = "&copy; 2025 Tarak Program | All rights reserved.";
      a.innerHTML = "Home";
      btn.innerHTML = "BN";
      count++;
      break;
    case 1:
      h1.innerHTML = "তারক প্রোগ্রাম";
      h3[0].innerHTML = "ক্যালকুলেটর";
      h3[1].innerHTML = "তাপমাত্রা কনভার্টার";
      h3[2].innerHTML = "সরল সুদকষা";
      p[0].innerHTML = "ক্যালকুলেটর ব্যবহার করে আপনারা হিসাব করতে পারবেন।";
      p[1].innerHTML = "এটি ব্যবহার করে আপনি সেলসিয়াস থেকে ফারেনহাইট ও ফারেনহাইট থেকে পরিবতন করতে পারবেন।";
      p[2].innerHTML = "এটি ব্যবহার করে আপনি সুদকষা অঙ্ক করতে পারবেন।";
      p[3].innerHTML = "&copy; ২০২৫ তারক প্রোগ্রাম | সর্বস্বত্ব সংরক্ষিত।";
      a.innerHTML = "বাড়ি";
      btn.innerHTML = "EN";
      count = 0;
  }
}
langCh();