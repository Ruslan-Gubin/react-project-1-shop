import { expect, test, describe } from "@jest/globals";
import { sumDiscount } from "../../utils/";



describe("Расчет процентов", () => {
  test("Коррекное значение", () => {
    expect(sumDiscount(50, 10)).toBe(400);
  });
  test("Сумма  не равная ", () => {
    expect(sumDiscount(80, 10)).not.toBe(400);
  });
  test("Сумма  не отрецательная ", () => {
    expect(sumDiscount(80, 10)).not.toBe(-400);
  });
  test("Сумма  number ", () => {
    expect(sumDiscount(80, 10)).not.toBeNaN();
  });
  test("Сумма  not null ", () => {
    expect(sumDiscount(80, 10)).not.toBeNull();
  });
  test("Корректное минимальное значение", () => {
    expect(sumDiscount(0, 0)).toBe(0);
  });
  test("Не указан один аргумент", () => {
    expect(sumDiscount(0)).toBe(0);
  });
  test("Не указаны аргументы", () => {
    expect(sumDiscount()).toBe(0);
  });
 
});