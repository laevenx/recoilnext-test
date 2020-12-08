import { atom } from "recoil";

export const books = atom({
    key: "books",
    default: [{
        name: "Hello!!",
        author : "Hello!!",
        desc: ""
    }]
})

