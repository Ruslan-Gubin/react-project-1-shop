import { expect, test, describe } from "@jest/globals";
import { mapArrayToString } from "../../utils";



describe("Расчет ресурсов", () => {
  test("Коррекное значение", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(['1','2','3']); // глубокое сравнение
  });
  test("Разные типы данных", () => {
    //@ts-ignore-start
    expect(mapArrayToString([1, 2, 3, null, undefined, 'string'])).toEqual(['1','2','3']); // глубокое сравнение
    //@ts-ignore-end
  });
  test("Пустой массив", () => {
    expect(mapArrayToString([])).toEqual([]); // глубокое сравнение
  });
  test("Пустой массив", () => {
    expect(mapArrayToString([])).toEqual([]); // глубокое сравнение
  });
  test("Коррекное значение", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual(['1','2','3','4']);
  });
  
});