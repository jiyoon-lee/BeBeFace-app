## 프로젝트 소개
### BeBeFace
“맘편히 맡겨, 엄마의 눈과 마음을 대신하다”<br>
'BeBeFace'는 부모와 돌보미간의 원활한 소통을 돕고 아기의 성장과정을 체계적으로 기록하는 서비스를 제공하는 플랫폼입니다. 현대 사회에서 많은 부모들이 자녀를 타인에게 맡겨야 하는 현실에 직면하고 있습니다. 이런 상황에서 부모들이 가장 크게 고민하는 것이 자녀의 안전과 건강입니다. 'BeBeFace'는 이러한 부모들의 불안을 줄이기 위해 탄생하였습니다.

### 개발기간
2023.11.09~2023.12.19

### 팀인원
4인

### 주요 기능
부모의 빈자리를 채워줄 수 있는 대표적인 두가지 서비스
- AI
  - 아기 침대에 부착된 캠으로 아이를 24시간 돌봄
  - 아이표정을 인식하여 울음, 웃음, 뒤집힘이 감지되면 모바일 폰으로 알림 전송
- 애플리케이션
  - 아기 행동 기록(타임라인)
  - 돌보미 출/퇴근 기록
  - 아기 하루일기
  - 아기 앨범(AI로 웃음이 감지되면 이를 캡처하여 앨범에 적재)

### 담당 업무
- 크로스 플랫폼 앱 개발

### 사용기술
- React Native, typescript, firebase FCM, axios, prettier, eslint

## 설치 및 실행
### Metro Server 시작
```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Application 시작
**Android**
```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

**iOS**

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## 배포
https://wondrous-pudding-b2d415.netlify.app

※ 웹 프론트서버만 호스팅 된 상태로 백서버, DB서버, Flask서버는 로컬 PC에 있어 실제 사용은 불가능<br>
   그럼에도 불구하고 웹 프론트서버만 호스팅 한 이유는 원활한 모바일 앱으로 알림을 보내기 위해


## 시스템 아키텍처
<img src="https://github.com/kosa-final-HLKP/fe-web/assets/59562141/367a4ae9-a213-43d0-8460-4dab3a05c6c7" alt="drawing" width="600"/>

- 프론트웹서버(Next.js)와 백서버(Spring Boot)는 http 프로토콜을 통해 통신
- 백엔드 서버는 로컬DB(MySQL)에 접속하여 데이터 관리
- AI는 Flask 가상환경에서 Tensorflow와 Pythorch로 호환되기 쉽도록 ONNX형식으로 내보내진 YOLO모델을 활용
- AI에서 아기의 울음, 웃음, 뒤집힘이 감지되면 http 통신으로 프론트웹서버(Next.js)에 http 호출하여 모바일 알림을 요청
- 프론트웹서버(Next.js)에서 Firebase FCM을 이용하여 http통신으로 모바일 알림을 요청
- Firebase에서 토큰이 발급된 디바이스(React Native)로 알림 요청
- AI에서 아기의 웃음이 감지되면 백서버(SpringBoot)로 http 통신하여 웃는 이미지를 전송, 이 이미지를 전달받은 백서버(Spring Boot)는 DB에 저장

## 데이터베이스
<img src="./UI캡처/3.png" alt="drawing" width="700"/>
<img src="./UI캡처/4.png" alt="drawing" width="700"/>
<img src="./UI캡처/5.png" alt="drawing" width="700"/>


## UI 캡쳐
<img src="./UI캡처/1.jpg" alt="drawing" width="300"/>
<img src="./UI캡처/2.jpg" alt="drawing" width="300"/>
