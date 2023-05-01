## 네트워크 최신기술 프로젝트: 차량 공유 서비스 데모
사용툴: Vanilla JS / HTML / CSS / Solidity / Ganache / Remix IDE  
참여자: 김동원 / 안세홍

### 1. 프로젝트 기획의도
차량을 공유하는 서비스를 Smart Contract로 구현하기

### 2. 실행 방법
#### 2.0. Node & Npm
해당 프로젝트는 **Node** 와 **Npm**을 사용합니다. 먼저 설치해주세요.  
Node & Npm 설치: https://joyfulhome.tistory.com/180
#### 2.1. 패키지 설치: 프로젝트 폴더 위치에서 해당 명령어 실행
```
> npm install
```
#### 2.2. Metamask & Ganache
해당 프로젝트는 Metamask와 Ganache 테스트 네트워크를 사용   
Metamask와 Ganache 연동: https://goldory.tistory.com/entry/MetaMask%EC%99%80-Ganache%EA%B0%80%EB%82%98%EC%8A%88-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-set-network

#### 2.3. Remix IDE에서 Solidity 배포
Remix IDE: https://remix.ethereum.org/   
프로젝트 내의 CarShare.sol / ContractRegistry.sol 파일을 배포
Metamask & Remix IDE 배포 방법: https://eloquence-developers.tistory.com/203

#### 2.4 ContractRegistry.sol 배포 이후
**ContractRegistry.sol**은 CarShare Contract를 관리하는 **Smart Contract** 입니다.
우선 어떤 파일 내의 ContractRegistry 배포 후 어드레스를 수정해주세요.
```javascript

```
#### 2.5 CarShare.sol 배포 이후
**CarShare.sol**을 배포하고 어드레스를 카피합니다. 해당 어드레스는 메인화면에서 등록할 때 쓰입니다.

#### 2.6 서버 실행
서버를 아래의 명령어를 통해 실행해주세요. 프로젝트 폴더 내에서 실행해야 합니다.
```
> node index.js
```
#### 2.7 서버 접속
과제이기 때문에 과제 룰을 따랐습니다. 아래의 URL이 메인화면입니다.  
메인화면: http://localhost:8080/김동원_안세홍.html
