import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';

interface ClientWrapper {
  // 재연결 지연 시간
  reconnectDelay?: number;
  heartbeatIncoming?: number;
  heartbeatOutgoing?: number;
}

const ClientWrapper = ({
  reconnectDelay = 1000 * 4,
  heartbeatIncoming = 1000 * 4,
  heartbeatOutgoing = 1000 * 4,
}: ClientWrapper) => {
  let client;
  if (typeof WebSocket !== 'function') {
    const socket = new SockJS('http://localhost:8080/ws-stomp');
    client = Stomp.over(socket);
  } else {
    client = new Client({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      connectHeaders: {},
      debug: function (str: string) {
        console.dir(str);
      },
      reconnectDelay,
      heartbeatIncoming,
      heartbeatOutgoing,
    });
  }

  client.onConnect = function (frame: any) {
    console.log(frame);
  };
  client.onStompError = function (frame: any) {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };
  return client;
};

export default ClientWrapper;
