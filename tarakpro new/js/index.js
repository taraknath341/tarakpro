"use strict";
let count = 1;
let h1 = document.getElementsByTagName("h1")[0];
let p = document.getElementsByTagName("p");
let h3 = document.getElementsByTagName("h3");
let a = document.getElementsByTagName("a");
let btn = document.getElementsByTagName("button");
function langCh() {
  switch (count) {
    case 1:
      // header
      h1.innerHTML = "Tarak Program";
      p[0].innerHTML = "Welcome to the world of programing!";
      // div
      h3[0].innerHTML = "Purpose";
      p[1].innerHTML = "The purpose of the Tarak program is for people to benefit from using the programs.";

      h3[1].innerHTML = "Request";
      p[2].innerHTML = "The Tarak Program's humble request to you is that you stand by the Tarak Program and support us.";

      h3[2].innerHTML = "Contact";
      p[3].innerHTML = "To contact the Tarak program, email taraknath341@yahoo.com and share your comments.";
      //footer
      p[4].innerHTML = "&copy; 2025 Tarak Program | All rights reserved.";
      // ankor
      a[0].innerHTML = "Program";
      btn[0].innerHTML = "BN";
      count++;
      break;
    case 2:
      // header
      h1.innerHTML = "তারক প্রোগ্রাম";
      p[0].innerHTML = "প্রোগ্রামিং এর জগতে স্বাগতম !";
      // div
      h3[0].innerHTML = "উদ্দেশ্য";
      p[1].innerHTML = "তারক প্রোগ্রামের উদ্দেশ্য হল যে মানুষ যাতে প্রোগ্রামগুলি ব্যবহার করে উপকৃত হতে পারে।";

      h3[1].innerHTML = "নিবেদন";
      p[2].innerHTML = "আপনাদের কাছে তারক প্রোগ্রামের বিনীত নিবেদন এই যে আপনারা তারক প্রোগ্রামের পাশে থাকুন এবং আমাদের সাপোট করুন।";

      h3[2].innerHTML = "যোগাযোগ";
      p[3].innerHTML = "তারক প্রোগ্রামের সাথে যোগাযোগ করার জন্য taraknath341@yahoo.com এ মেইল করুন এবং আপনাদের মন্তব্যগুলি জানান।";
      //footer
      p[4].innerHTML = "&copy; ২০২৫ তারক প্রোগ্রাম | সর্বস্বত্ব সংরক্ষিত।";
      // ankor
      a[0].innerHTML = "প্রোগ্রাম";
      btn[0].innerHTML = "EN";
      count = 1;
      // style
  }
}
langCh();