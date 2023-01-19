import {jest, expect,test,describe, beforeEach,beforeAll,afterEach,afterAll,
} from "@jest/globals";
import { square } from "../../utils";

describe("Функция для возвединии в степень", () => {
  let mockValue: number = 2;
  /**Выполнится перед каждым тестом */
  beforeEach(() => {
    // к примеру добавить пользователя в бд
    mockValue = 2
  });
  /**Выполняется один раз перед всеми тестами*/
  beforeAll(() => {});

  test("Коррекное значение", () => {
    expect(square(mockValue)).toBe(4);
    expect(square(mockValue)).not.toBeUndefined();
    expect(square(mockValue)).not.toBeNull(); 
    expect(square(mockValue)).not.toBeNaN(); 
    expect(square(1)).toEqual(1); 
  });
  test("Функция должна возвращать меньше заданного числа (5)", () => {
    expect(square(2)).toBeLessThan(5);
  });
  test("Функция должна возвращать больше заданного числа (3)", () => {
    expect(square(mockValue)).toBeGreaterThan(3);
  });
  test("Функция вызывает метод Math.pow - 1 раз", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(mockValue)
    expect(spyMathPow).toBeCalledTimes(1); 
  });

  test("Функция метод Math.pow не вызывается если переданна в аргументы 1", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1)
    expect(spyMathPow).toBeCalledTimes(0); 
  });

  /**Выполнится после каждого теста */
  afterEach(() => {
    jest.clearAllMocks()
     // а затем после тестов удалить пользователя из бд
  });
  /**Выполнится после всех тестов */
  afterAll(() => {
    // можно добавить очищение вех данных
    // mockValue = 0
  });
});
