import header from './mockjson/header.json';
import about from './mockjson/about.json';
import experience from './mockjson/experience.json';
import contact from './mockjson/contact.json';
import education from './mockjson/education.json';
import social from './mockjson/social.json';
import toolbox from './mockjson/toolbox.json';

const HEADER = JSON.stringify(header);
const ABOUT = JSON.stringify(about);
const EXPERIENCE = JSON.stringify(experience);
const CONTACT = JSON.stringify(contact);
const EDUCATION = JSON.stringify(education);
const SOCIAL = JSON.stringify(social);
const TOOLBOX = JSON.stringify(toolbox);


const MockData = {
    HEADER,
    ABOUT,
    EXPERIENCE,
    CONTACT,
    EDUCATION,
    SOCIAL,
    TOOLBOX
};
export default MockData;