export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
export const headers = {
  projectName: 'Project Name',
  clientName: 'Client Name',
  startDate: 'Start Date',
  noOfEmployees: 'No of Employees',
  minExperience: 'Min Experience',
  skillsRequired: 'Skills Required',
  location: 'Location'
}

export const inputDataKeys = [
  'projectName',
  'clientName',
  'startDate',
  'noOfEmployees',
  'minExperience',
  'skillsRequired',
  'location'
]

export const DummyData = [
  {
    'id': 1234,
    'clientName': 'Microsoft',
    'projectName': 'All AI',
    'startDate': '2021-4-20',
    'noOfEmployees': 20,
    'minExperience': 1,
    'skillsRequired': ['Machine Learning', 'Python'],
    'location': 'Mumbai'
  },
  {
    'id': 1235,
    'clientName': 'Honeywell',
    'projectName': 'Gama',
    'startDate': '2021-4-25',
    'noOfEmployees': 25,
    'minExperience': 3,
    'skillsRequired': ['Machine Learning', 'Python'],
    'location': 'Delhi'
  },
  {
    'id': 1236,
    'clientName': 'Infosys',
    'projectName': 'Sigma',
    'startDate': '2021-4-27',
    'noOfEmployees': 40,
    'minExperience': 0,
    'skillsRequired': ['Angular', 'TypeScript'],
    'location': 'Chennai'
  },
  {
    'id': 1237,
    'clientName': 'Infosys',
    'projectName': 'Beta',
    'startDate': '2021-5-2',
    'noOfEmployees': 12,
    'minExperience': 1,
    'skillsRequired': ['Java', 'Springboot'],
    'location': 'Mumbai'
  },
  {
    'id': 1238,
    'clientName': 'Facebook',
    'projectName': 'kudos',
    'startDate': '2021-5-2',
    'noOfEmployees': 6,
    'minExperience': 5,
    'skillsRequired': ['Cloud', 'AWS'],
    'location': 'Chennai'
  },
  {
    'id': 1239,
    'clientName': 'Microsoft',
    'projectName': 'Brahmas',
    'startDate': '2021-5-4',
    'noOfEmployees': 56,
    'minExperience': 10,
    'skillsRequired': ['Jenkins', 'Jhipster'],
    'location': 'Delhi'
  },
  {
    'id': 1240,
    'clientName': 'Honeywell',
    'projectName': 'Chapri',
    'startDate': '2021-5-10',
    'noOfEmployees': 30,
    'minExperience': 15,
    'skillsRequired': ['Java', 'JavaScript'],
    'location': 'Chennai'
  },
  {
    'id': 1241,
    'clientName': 'Google',
    'projectName': 'Koma',
    'startDate': '2021-5-12',
    'noOfEmployees': 2,
    'minExperience': 3,
    'skillsRequired': ['React', 'Python'],
    'location': 'Mumbai'
  },
  {
    'id': 1242,
    'clientName': 'TCS',
    'projectName': 'sandal',
    'startDate': '2021-5-15',
    'noOfEmployees': 13,
    'minExperience': 2,
    'skillsRequired': ['React', 'Node JS'],
    'location': 'Chennai'
  },
  {
    'id': 1243,
    'clientName': 'CapGemini',
    'projectName': 'Karishma',
    'startDate': '2021-5-17',
    'noOfEmployees': 45,
    'minExperience': 0,
    'skillsRequired': ['Data Entry'],
    'location': 'Delhi'
  },
  {
    'id': 1244,
    'clientName': 'Microsoft',
    'projectName': 'ION',
    'startDate': '2021-5-20',
    'noOfEmployees': 8,
    'minExperience': 0,
    'skillsRequired': ['Django', 'Python'],
    'location': 'Chennai'
  },
  {
    'id': 1245,
    'clientName': 'Matlabs',
    'projectName': 'All ML',
    'startDate': '2021-5-25',
    'noOfEmployees': 22,
    'minExperience': 4,
    'skillsRequired': ['Machine Learning', 'NLP', 'Python'],
    'location': 'Mumbai'
  },
  {
    'id': 1246,
    'clientName': 'Infosys',
    'projectName': 'Rofus',
    'startDate': '2021-5-29',
    'noOfEmployees': 12,
    'minExperience': 3,
    'skillsRequired': ['English'],
    'location': 'Delhi'
  },
  {
    'id': 1247,
    'clientName': 'Amazon',
    'projectName': 'AM 47',
    'startDate': '2021-6-5',
    'noOfEmployees': 10,
    'minExperience': 0,
    'skillsRequired': ['C++', 'Python'],
    'location': 'Chennai'
  },
  {
    'id': 1248,
    'clientName': 'Flipkart',
    'projectName': 'Machine Core',
    'startDate': '2021-6-10',
    'noOfEmployees': 2,
    'minExperience': 10,
    'skillsRequired': ['GoLang'],
    'location': 'Mumbai'
  },
  {
    'id': 1249,
    'clientName': 'Flipkart',
    'projectName': 'Searching',
    'startDate': '2021-6-12',
    'noOfEmployees': 60,
    'minExperience': 10,
    'skillsRequired': ['Springboot', 'Java'],
    'location': 'Delhi'
  },
  {
    'id': 1250,
    'clientName': 'Amazon',
    'projectName': 'Visual Thing',
    'startDate': '2021-6-15',
    'noOfEmployees': 52,
    'minExperience': 0,
    'skillsRequired': ['Springboot', 'Java'],
    'location': 'Chennai'
  },
  {
    'id': 1251,
    'clientName': 'AliBaba',
    'projectName': 'Blind',
    'startDate': '2021-6-20',
    'noOfEmployees': 100,
    'minExperience': 5,
    'skillsRequired': ['Machine Learning', 'Python'],
    'location': 'Mumbai'
  },
  {
    'id': 1252,
    'clientName': 'AliBaba',
    'projectName': 'Alpanso',
    'startDate': '2021-6-22',
    'noOfEmployees': 10,
    'minExperience': 0,
    'skillsRequired': ['React', 'TypeScript'],
    'location': 'Chennai'
  },
  {
    'id': 1253,
    'clientName': 'TCS',
    'projectName': 'motherboard',
    'startDate': '2021-6-25',
    'noOfEmployees': 10,
    'minExperience': 12,
    'skillsRequired': ['TypeScript'],
    'location': 'Delhi'
  },
  {
    'id': 1254,
    'clientName': 'Capgemini',
    'projectName': 'Arugo',
    'startDate': '2021-6-28',
    'noOfEmployees': 12,
    'minExperience': 1,
    'skillsRequired': ['Angular'],
    'location': 'Delhi'
  },
  {
    'id': 1255,
    'clientName': 'Flipkart',
    'projectName': 'Balsio',
    'startDate': '2021-7-3',
    'noOfEmployees': 20,
    'minExperience': 4,
    'skillsRequired': ['Java'],
    'location': 'Delhi'
  },
  {
    'id': 1256,
    'clientName': 'Rapido',
    'projectName': 'RapidoAnd',
    'startDate': '2021-7-7',
    'noOfEmployees': 100,
    'minExperience': 10,
    'skillsRequired': ['NLP'],
    'location': 'Mumbai'
  },
  {
    'id': 1257,
    'clientName': 'Satyam Technologies',
    'projectName': 'Koti',
    'startDate': '2021-7-12',
    'noOfEmployees': 10,
    'minExperience': 0,
    'skillsRequired': ['Angular'],
    'location': 'Chennai'
  },
  {
    'id': 1258,
    'clientName': 'Facebook',
    'projectName': 'Hitec Drama',
    'startDate': '2021-7-16',
    'noOfEmployees': 42,
    'minExperience': 1,
    'skillsRequired': ['GoLang', 'Django'],
    'location': 'Delhi'
  },
  {
    'id': 1259,
    'clientName': 'Flipkart',
    'projectName': 'one8',
    'startDate': '2021-7-22',
    'noOfEmployees': 120,
    'minExperience': 2,
    'skillsRequired': ['React'],
    'location': 'Mumbai'
  },
  {
    'id': 1260,
    'clientName': 'Microsoft',
    'projectName': 'Cross Juntion',
    'startDate': '2021-7-28',
    'noOfEmployees': 15,
    'minExperience': 0,
    'skillsRequired': ['C', 'Python'],
    'location': 'Chennai'
  }
]