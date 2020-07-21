import { SearchFunction } from "../../types";

import binarySearch from "./binarySearch";
import linearSearch from "./linearSearch";
import { NO_MATCH } from "./common";
import { arithmeticComparator, generateRandomNumbers } from "../common";

interface NamedSearch {
  name: string;
  search: SearchFunction;
}

const algorithms: NamedSearch[] = [
  {
    name: "Binary Search",
    search: binarySearch,
  },
  {
    name: "Linear Search",
    search: linearSearch,
  },
];

algorithms.forEach(({ name, search }) => {
  test(`${name} - Numbers`, () => {
    // Generate a list of random numbers
    const inputList: number[] = generateRandomNumbers(0, 100, 20);
    inputList.sort(arithmeticComparator);

    // Search for some specific indices
    [1, 10, 14, 19].forEach((index) => {
      // Search for the 15th one
      const result: number = search(inputList, (d) => inputList[index] - d);

      // If the number matches twice, the indexes may not match
      expect(inputList[result]).toBe(inputList[index]);
    });

    // Search with criteria that will never match
    const indexNoMatch: number = search(inputList, () => NO_MATCH);
    expect(indexNoMatch).toBe(NO_MATCH);
  });
});
