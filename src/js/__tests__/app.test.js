import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

jest.setTimeout(15000);

test('check GameSavingLoader', (done) => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(new GameSaving(expected));
    done();
  });
});
