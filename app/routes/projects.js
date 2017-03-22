import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: '1',
      title: 'MusicEditor',
      owner: 'Manman Liang',
      language: 'JAVA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }, {
      id: '2',
      title: 'TowerOfHanoi',
      owner: 'Manman Liang',
      language: 'JAVA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
    }, {
      id: '3',
      title: 'ForbiddenIsland',
      owner: 'Manman Liang',
      language: 'JAVA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
    }];
  }
});
