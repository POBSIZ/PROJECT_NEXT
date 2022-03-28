import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';

interface ClientWrapperProps {
  // 재연결 지연 시간
  reconnectDelay?: number;
  heartbeatIncoming?: number;
  heartbeatOutgoing?: number;
  onConnectFunc: () => {} | void;
  onErrorFunc: () => {} | void;
}

const SocketClient = ({
  reconnectDelay = 1000 * 4,
  heartbeatIncoming = 1000 * 4,
  heartbeatOutgoing = 1000 * 4,
  onConnectFunc,
  onErrorFunc,
}: ClientWrapperProps) => {
  let client;
  if (typeof WebSocket !== 'function') {
    const socket = new SockJS('http://172.30.1.32:8080/ws-stomp');
    client = Stomp.over(socket);
  } else {
    client = new Client({
      brokerURL: 'ws://172.30.1.32:8080/ws-stomp',
      webSocketFactory: () => new SockJS('http://172.30.1.32:8080/ws-stomp'),
      connectHeaders: {},
      debug: function (str: string) {
        console.dir(str);
      },
      reconnectDelay,
      heartbeatIncoming,
      heartbeatOutgoing,
    });
    // client.activate();
  }

  client.onSubscribe = function (url, cb, headers) {
    console.log('Connect WS Server!!!');
    console.log(client);
  };

  client.onStompError = function (frame: any) {
    onErrorFunc();
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };

  return client;
};

export default SocketClient;
