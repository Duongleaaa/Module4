"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLen() {
        return this.length;
    }
    setLen(length) {
        this.length = length;
    }
}
let song = new Song(1, "Waiting for you", 18000);
console.log(song.getName());
song.setName("Chúng ta của hiện tại");
console.log(song.getLen());
song.setLen(2000000);
