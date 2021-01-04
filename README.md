# unit-test-example
---
## Start Project
Clone git repository :
```
git clone https://github.com/TommyLin81/unit-test-example.git
```
Install dependency library with npm or yarn : 
```
cd unit-test-example
npm install  // with npm
yarn // with yarn
```
Run node project :
```
yarn start
```
Run jest unit test :
```
yarn test
```

## Note
已知問題：因為node專案設定使用原生ESM import模式, 但是jest在該模式下 jest.mock function會有問題
[jest-github-issues link](https://github.com/facebook/jest/issues/10025)