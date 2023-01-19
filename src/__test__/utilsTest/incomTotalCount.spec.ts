import { expect, test, describe } from "@jest/globals";
import { incomTotalCount } from "../../utils/incomTotalCount";
import { testMineArray } from "../data";

describe("Расчет ресурсов", () => {
  test("Коррекное значение", () => {
    expect(incomTotalCount(testMineArray, "iron")).toBe(25);
  });
  test("Не правильно указан второй аргумент", () => {
    expect(incomTotalCount(testMineArray, "irons")).toBe(0);
  });
  test("Передан пустой массив", () => {
    expect(incomTotalCount([], "irons")).toEqual([]);
  });
  test("Проверяем другой аргумент wheat", () => {
    expect(incomTotalCount(testMineArray, "wheat")).toBe(17);
  });
  test("Передан пустой массив wood", () => {
    expect(incomTotalCount(testMineArray, "wood")).toBe(6);
  });
});
