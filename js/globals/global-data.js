const routes__story = ['/machine-learning', '/train-model', '/buzzwords']
const routes__story_mobile = ['/machine-learning', '/buzzwords']
const routes__info = ['/project', '/home']

const giScripts = [
  {
    'src': 'js/gi.js',
    'id': 'gi',
  }
]

const headerLinks = [
  {
    'id': 'Buzzwords',
    'ref': '/buzzwords',
    'class': 'nav-item',
    'index': -1
  },
  {
    'id': 'Machine Learning',
    'ref': '/machine-learning',
    'class': 'nav-item',
    'index': 0
  },
  {
    'id': 'Training',
    'ref': '/train-model',
    'class': 'nav-item ng-dashed',
    'index': 1
  }
]


// models
const modelHandPose = {
  model: 'data/models/hand-open/model.json',
  metadata: 'data/models/hand-open/model_meta.json',
  weights: 'data/models/hand-open/model.weights.bin',
};

const options = {
  inputs: 42,
  outputs: 2,
  task: 'classification',
}


const breakpoints = [180, 320, 460] // 0 - 640
const story = ['buzzwords', 'machine-learning', 'train-model']


// colors
const col__dark_01 = [28, 25, 34]
const col__dark_02 = [38, 46, 49]
const col__main_01 = [58, 186, 125]
const col__main_02 = [82, 125, 111]
const col__accent = [251, 136, 141]


