import { testSaga } from './test';
import { authSaga } from './auth';
import { toastSaga } from './toast';

const Sagas = [testSaga(), authSaga(), toastSaga()];

export default Sagas;
