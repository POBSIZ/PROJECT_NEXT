import { testSaga } from './test';
import { authSaga } from './auth';

const Sagas = [
	testSaga(), 
	authSaga(),
];

export default Sagas;