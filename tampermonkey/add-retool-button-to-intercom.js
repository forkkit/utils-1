// ==UserScript==
// @name         Add Retool button to Intercom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Jump right into Retool :D
// @author       You
// @match        https://app.intercom.io/a/apps/*
// @grant        none
// @run-at       document-end
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
  "use strict";

  // FIXME: configure for your own retool app
  function makeRetoolLink(email) {
    return (
      "https://glideapps.tryretool.com/apps/Glide%20(Production)#tab=1&user_email=" +
      encodeURIComponent(email)
    );
  }

  function addRetoolButton() {
    const email = $("div[data-attribute-id=email]").attr("data-value");
    if (email === undefined) return;

    const retoolLink = makeRetoolLink(email);
    const button = $(".retool");

    if (button.length) {
      button.attr("href", retoolLink);
    } else {
      const style = "text-decoration: none; margin-left: 4px;";
      const link = `<a class="stamp retool" style="${style}" target="_blank" href="${retoolLink}">Retool</a>`;
      $(".stamp.o__user").after(link);
    }
  }

  setInterval(addRetoolButton, 1000);
})();
