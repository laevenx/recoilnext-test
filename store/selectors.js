import { selector } from "recoil";
import { books } from "./atoms";

export const addData = selector({
  key: "addData",
  get: ({ get }) => get(books),
  set: ({ get, set, reset }, newValue) => {
    // let bookData = get(books) // you can't push data from GET
    console.log(newValue)
    // HOW TO USE SET
    // let newBook = {
    //   name: "testing1",
    //   author: "testing1",
    //   desc: "testing1",
    // };
    set(books, newValue); // (atom, newValue)

    let bookData = get(books);
    //    bookData = reset(books) // Erase atom data
    console.log(bookData)
    // return bookData
  },
});
