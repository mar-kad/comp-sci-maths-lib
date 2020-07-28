import { SortUtility } from "../../types";
import { anyComparator, emptyObserver, simpleSwap } from "../common";

export default <T>(
  inputList: T[],
  {
    compare = anyComparator,
    observe = emptyObserver,
    swap = simpleSwap,
  }: SortUtility<T>
): T[] => {
  if (inputList.length < 2) {
    return inputList;
  }

  // Don't modify the input
  const outputList = [...inputList];

  for (let index = 1; index < outputList.length; index++) {
    observe("Placing Item", outputList, { index });
    let itemPlace = index;
    while (itemPlace > 0) {
      const lower = itemPlace - 1;
      const upper = itemPlace;

      observe("Seeking Place", outputList, {
        index,
        lower,
        upper,
      });

      const comparison: number = compare(outputList[lower], outputList[upper]);

      // The compare returns -ve if the first item is 'greater than' the second one
      if (comparison > 0) {
        // Temporary variable to prevent overwrites
        swap(outputList, lower, upper);
      } else {
        itemPlace = upper;
        break;
      }

      itemPlace -= 1;
    }
  }

  return outputList;
};
