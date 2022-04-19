import PropTypes from 'prop-types';

function Music({name, picture, singer, date}){
  return (
    <div>
      <h2>{name}</h2>
      <h4>{singer}({date}) </h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const musicLike = [
  {
    id: 1,
    name: 'Beach Bummer',
    image: 'https://image.bugsm.co.kr/album/images/500/106048/10604812.jpg',
    artist: 'No Vacation',
    released: 2015
  },
  {
    id: 2,
    name: 'MANIAC',
    image: 'https://blog.kakaocdn.net/dn/xFQfh/btrwlRZVRaj/VAfLYNaKqVJgLvXDgbm480/img.png',
    artist: 'Stray Kids',
    released: 2022
  },
  {
    id: 3,
    name: 'Plastic Love',
    image: 'https://i.ytimg.com/vi/9Gj47G2e1Jc/hqdefault.jpg',
    artist: 'Mariya Takeuchi',
    released: 1984
  },
  {
    id: 4,
    name: 'SAD!',
    image: 'https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c',
    artist: 'XXXTENTACION',
    released: 2018
  },
  {
    id: 5,
    name: 'Something About Us',
    image: 'http://www.akbobada.com/home/akbobada/archive/akbo/img/54672.jpg',
    artist: 'Daft Punk',
    released: 2001
  }
];

function App() {
  return (
    <div>
      {musicLike.map(song => 
        <Music key={song.id} name={song.name} picture={song.image} singer={song.artist} date={song.released}/>
      )}
    </div>
  );
}

Music.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  singer : PropTypes.string.isRequired,
  date : PropTypes.number
};

export default App;