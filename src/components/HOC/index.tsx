import CustomSuspense from './customSuspense';
import SocketClient from './client/socket';
import ApiClient from './client/api';

const Hoc = { CustomSuspense, SocketClient, ApiClient };

export default Hoc;
export { CustomSuspense, SocketClient, ApiClient };
