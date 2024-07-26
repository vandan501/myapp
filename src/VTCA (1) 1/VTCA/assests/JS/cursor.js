const p = document.getElementById("p");


function WoWCursor(selector) {
    this.pointer = document.getElementById(selector);
    this.delay = 0;
    this.signature = this.capture.bind(this);
}

WoWCursor.prototype.start = function() {
    window.addEventListener("pointermove", this.signature);
    window.addEventListener("pointermove", this.signature);
}

WoWCursor.prototype.stop = function() {
    window.removeEventListener("pointermove", this.signature);
    window.removeEventListener("pointermove", this.signature);
}

WoWCursor.prototype.capture = function(e) {
    setTimeout(() => {
        link.call(this.pointer.style, "left", "pageX", e);
        link.call(this.pointer.style, "top", "pageY", e);
    }, this.delay);
}

function link(_property, with_that_property, this_object_) {
    this[_property] = `${ this_object_[with_that_property] }px`;
}



const load = document.querySelector("#loading")
const cursor = new WoWCursor("loading");
cursor.start();

const widthDelay = new WoWCursor("withDelay");
widthDelay.delay = 100;
widthDelay.start();

function getPixelStyle(number) {
    return `${number}px`;
}