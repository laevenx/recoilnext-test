import { atom } from "recoil";

export const books = atom({
    key: "atomStateBooks",
    default: [{
        id: 0,
        name: "Hello!!",
        author : "Hello!!",
        desc: ""
    }]
})


