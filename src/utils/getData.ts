import axios from "axios";
import { mapArrayToString } from "./mapArrayToString";


const getData = async (): Promise<string[] | any> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const usersIds = response.data.map((user: any) => user.id);
    return mapArrayToString(usersIds);
  } catch (error) {
    console.error(error);
  }
};

export { getData };
