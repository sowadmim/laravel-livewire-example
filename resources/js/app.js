require("./bootstrap");

const Turbolinks = require("turbolinks");
document.addEventListener("livewire:load", function (event) {
    Turbolinks.start();
});

import "alpinejs";

import "livewire-sortable";
