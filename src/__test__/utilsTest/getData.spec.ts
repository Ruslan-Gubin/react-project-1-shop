import {jest, expect,test,describe, beforeEach,beforeAll,afterEach,afterAll,
} from "@jest/globals";
import axios from 'axios';
import { getData } from "../../utils";
import { responseTestData } from "../data";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Получаем данные с jsonplaceholder", () => {
  let response: any;
  
  /**Выполнится перед каждым тестом */
  beforeEach(() => {
    response = responseTestData
  });
  /**Выполняется один раз перед всеми тестами*/
  beforeAll(() => {});
  
  test("Коррекное значение", async () => {
    mockedAxios.get.mockReturnValue(response)
    const data = await getData()
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(["1", "2", '3'])
    expect(data).toMatchSnapshot()
  });

  /**Выполнится после каждого теста */
  afterEach(() => {
  });
  /**Выполнится после всех тестов */
  afterAll(() => {
  });
});