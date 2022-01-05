import axios from 'axios';
import {
  GetCheckSessionPramType,
  GetCheckSessionResponseType,
  GetTestParamType,
  GetTestResponseType,
} from 'Types/testTypes';

// GET NAME API
export async function apiGetCheckSession(info: GetCheckSessionPramType) {
  const response = await axios.get<GetCheckSessionResponseType>(
    `http://localhost:3000/api/hello`
  );
  return response.data;
}

// GET TEST API
export const apiGetTest = async (id: GetTestParamType) => {
  const res = await axios.get<GetTestResponseType>(
    `http://localhost:3000/api/test`
  )
  return res.data;
} 