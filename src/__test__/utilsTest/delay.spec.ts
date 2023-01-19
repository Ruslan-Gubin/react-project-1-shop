import {jest, expect,test,describe, beforeEach,beforeAll,afterEach,afterAll,
} from "@jest/globals";
import { delay } from "../../utils";




describe("Для вызова колбек функции с задержкой", () => {
  const mockFn = () => 10 + 10
  
  /**Выполнится перед каждым тестом */
  beforeEach(() => {});
  /**Выполняется один раз перед всеми тестами*/
  beforeAll(() => {});
  
  test("Коррекное значение", async () => {
    const sumResult = await delay(mockFn, 1000)
    expect(sumResult).toBe(20);
    expect(sumResult).not.toBeUndefined();
    expect(sumResult).not.toBeNull(); 
    expect(sumResult).not.toBeNaN(); 
    expect(sumResult).not.toBeFalsy(); 
    expect(sumResult).toBeGreaterThan(19); 
    expect(sumResult).toBeLessThan(21); 

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