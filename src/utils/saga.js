import { fork, all } from 'redux-saga/effects';

function startSagas(sagaGenerators) {
  const sagasArray = (() => {
    const returnArray = [];
    sagaGenerators.forEach((sagasCollection) => {
      Object.entries(sagasCollection)
        .filter(([sagaName]) => !sagaName.startsWith('_')) // skip private functions
        // eslint-disable-next-line no-unused-vars
        .forEach(([sagaName, sagaValue]) => {
          returnArray.push(fork(sagaValue));
        });
    });
    return returnArray;
  })();

  return function* sagas() {
    yield all(sagasArray);
  };
}

export { startSagas };
