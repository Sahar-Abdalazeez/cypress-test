//we need to import two things
//1. the expect from chai
//2.the function you want to test
import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe(" test shuffle funcion ", () => {
    //testCase1:all elements exist
    it("the shuffled array should have all the elements exist in the original array  ", () => {
        const arr = [1, 2, 3, 4, 5];
        let result = shuffle(arr);
        expect(result).to.have.members(arr);
    });
    //testCase2:should return array with the same length
    it("the result array length should have same length of the input array ", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = shuffle(arr);
        expect(result?.length).to.equal(arr.length);
    });
    //testCase3: check the original array
    it("the original array shouldn't change ", () => {
        const arr = [1, 2, 3, 4, 5];
        const copiedArr = [...arr];
        //the result below it's not used but to make sure that shuffling not affecting the original array
        const result = shuffle(arr);

        const test =
            arr.length === copiedArr.length &&
            arr.every((val, i) => val === copiedArr[i]);
        expect(test).to.equal(true);
    });
    //testCase4:make sure that it shuffles the array
    it("should return a different order at least once in three times ", () => {
        const arr = [1, 2, 3, 4, 5];
        let isDifferent = false;
        for (let i = 0; i < 3; i++) {
            if (shuffle(arr).join("") !== arr.join("")) {
                isDifferent = true;
                break;
            }
        }
        expect(isDifferent).to.equal(true);
    });

    //testCase5:passing empty array
    it("passing empty array will return empty array  ", () => {
        const arr = [];
        let result = shuffle(arr);
        expect(result?.length).to.equal(0);
    });
});
