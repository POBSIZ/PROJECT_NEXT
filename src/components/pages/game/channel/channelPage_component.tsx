import React, { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { nanoid } from 'nanoid';
import { ChannelPageProps } from '.';
import { ChannelBoxPropsTypeTest } from 'Molecules/channelBox/channelBox_types';
import Layout from 'Layouts';
import StyledChannelPage, {
  StyledChannelPageItem,
  BottomNav,
} from './channelPage_styled';
import Modal, {
  ModalContentLayout,
  ModalHeaderLayout,
} from 'Atoms/modal/modal_component';
import { Input, Button } from 'Atoms';
import { ChannelBox } from 'Molecules';

const ChannelPageComponent: React.FC<ChannelPageProps> = (
  props,
  {}: ChannelPageProps,
) => {
  const router = useRouter();

  const [isOpenCreateChannelModal, setIsOpenCreateChannelModal] =
    useState<boolean>(false);
  const [channelName, setChannelName] = useState<string>('');
  const [channelLimit, setChannelLimit] = useState<number>(2);
  const [enterFee, setEnterFee] = useState<number>(1000);

  function createChannel() {
    axios
      .post(
        `http://172.30.1.32:8000/api/v1/investment/channel`,
        {
          entryFee: enterFee,
          limitOfParticipants: channelLimit,
          name: channelName,
        },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          router.push(`/game/investing/${res.data[0].id}`);
          setIsOpenCreateChannelModal(false);
        }
      });
  }

  return (
    <>
      <Layout.Container>
        <StyledChannelPage>
          <h1>📃 게임 목록</h1>

          <Button
            onClick={() => {
              setChannelName('');
              setChannelLimit(2);
              setEnterFee(1000);
              setIsOpenCreateChannelModal(true);
            }}
            backColor="gradient"
          >
            채널 생성
          </Button>
          <ul>
            {props?.channelList?.map((item: ChannelBoxPropsTypeTest) => (
              <StyledChannelPageItem key={nanoid()}>
                <ChannelBox
                  title={item.channelName}
                  time={10}
                  point={item.entryFee}
                  curr_user={Object.keys(item.users).length}
                  max_user={item.limitOfParticipants}
                  info="Lorem Ipsum Dolor Sit"
                  creator={item.hostId}
                  link={item.id}
                />
              </StyledChannelPageItem>
            ))}
          </ul>
        </StyledChannelPage>

        <Modal visible={isOpenCreateChannelModal} width={'50%'} height={'50%'}>
          <ModalHeaderLayout
            title="채널 생성"
            onClick={() => {
              setIsOpenCreateChannelModal(false);
            }}
          />
          <ModalContentLayout>
            <Input
              type="text"
              name="channelName"
              value={channelName}
              onChange={(e) => {
                setChannelName(e.target.value);
              }}
              placeholder="방제목 입력"
            />
            <Input
              type="number"
              value={channelLimit}
              onChange={(e) => {
                if (
                  1 <= parseInt(e.target.value) &&
                  parseInt(e.target.value) <= 8
                ) {
                  setChannelLimit(e.target.value);
                } else {
                }
              }}
              step={1}
              placeholder="입장 인원 제한수"
            />
            <Input
              type="number"
              value={enterFee}
              onChange={(e) => {
                if (
                  100 <= parseInt(e.target.value) &&
                  parseInt(e.target.value) <= 2000
                ) {
                  setEnterFee(e.target.value);
                }
              }}
              step={100}
              placeholder="게임 입장 포인트"
            />
            <BottomNav>
              <Button
                onClick={() => {
                  if (channelName !== '') {
                    createChannel();
                  } else {
                    console.log('채널 생성 안됨.');
                  }
                }}
                backColor="primary"
              >
                생성
              </Button>
              <Button
                onClick={() => {
                  setIsOpenCreateChannelModal(false);
                }}
                backColor="black"
              >
                취소
              </Button>
            </BottomNav>
          </ModalContentLayout>
        </Modal>
      </Layout.Container>
    </>
  );
};

export default ChannelPageComponent;
