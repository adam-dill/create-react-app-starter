const HEADER = '{"data":{"id":1,"attributes":{"Title":"Adam Dill","SubTitle":"UI Developer","createdAt":"2024-09-08T20:22:33.502Z","updatedAt":"2024-09-08T21:10:06.627Z","publishedAt":"2024-09-08T21:10:06.624Z","AllowResumeDownload":true,"BackgroundImage":{"data":{"id":1,"attributes":{"name":"notebook-and-coffee-at-office-desk-.jpg","alternativeText":null,"caption":null,"width":970,"height":647,"formats":{"small":{"ext":".jpg","url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725827779/small_notebook_and_coffee_at_office_desk_d3739ca800.jpg","hash":"small_notebook_and_coffee_at_office_desk_d3739ca800","mime":"image/jpeg","name":"small_notebook-and-coffee-at-office-desk-.jpg","path":null,"size":25.77,"width":500,"height":334,"sizeInBytes":25766,"provider_metadata":{"public_id":"small_notebook_and_coffee_at_office_desk_d3739ca800","resource_type":"image"}},"medium":{"ext":".jpg","url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725827779/medium_notebook_and_coffee_at_office_desk_d3739ca800.jpg","hash":"medium_notebook_and_coffee_at_office_desk_d3739ca800","mime":"image/jpeg","name":"medium_notebook-and-coffee-at-office-desk-.jpg","path":null,"size":48.49,"width":750,"height":500,"sizeInBytes":48492,"provider_metadata":{"public_id":"medium_notebook_and_coffee_at_office_desk_d3739ca800","resource_type":"image"}},"thumbnail":{"ext":".jpg","url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725827779/thumbnail_notebook_and_coffee_at_office_desk_d3739ca800.jpg","hash":"thumbnail_notebook_and_coffee_at_office_desk_d3739ca800","mime":"image/jpeg","name":"thumbnail_notebook-and-coffee-at-office-desk-.jpg","path":null,"size":7.47,"width":234,"height":156,"sizeInBytes":7468,"provider_metadata":{"public_id":"thumbnail_notebook_and_coffee_at_office_desk_d3739ca800","resource_type":"image"}}},"hash":"notebook_and_coffee_at_office_desk_d3739ca800","ext":".jpg","mime":"image/jpeg","size":67.54,"url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725827779/notebook_and_coffee_at_office_desk_d3739ca800.jpg","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"notebook_and_coffee_at_office_desk_d3739ca800","resource_type":"image"},"createdAt":"2024-09-08T20:36:19.826Z","updatedAt":"2024-09-08T20:36:19.826Z"}}}}},"meta":{}}';
const ABOUT = '{"data":{"id":1,"attributes":{"AboutText":"With over ten years experience programming user interfaces in the private sector, personal projects, and department of defense contracting, I am able to adapt to several coding scenarios. I can develop entirely new UI systems from scratch, troubleshoot and enhance existing code or quickly become a member of a production pipeline. My main interest is in increasing production efficiency and lowering costs through automation.","createdAt":"2024-09-07T20:23:52.200Z","updatedAt":"2024-09-08T20:59:01.237Z","publishedAt":"2024-09-07T20:23:53.410Z","ResumeSectionHeader":{"id":3,"IconClass":"none","Title":"About"}}},"meta":{}}';
const CONTACT = '{"data":{"id":1,"attributes":{"createdAt":"2024-09-07T13:47:12.395Z","updatedAt":"2024-09-08T21:09:59.242Z","publishedAt":"2024-09-08T21:09:59.239Z","Phone":"407.790,1740","Email":"contact@adamdilll.com","Website":"www.adamdill.com","ResumeSectionHeader":{"id":1,"IconClass":"none","Title":"Contact"}}},"meta":{}}';
const EDUCATION = '{"data":{"id":1,"attributes":{"createdAt":"2024-09-08T20:21:49.622Z","updatedAt":"2024-09-17T14:45:29.927Z","publishedAt":"2024-09-17T14:45:29.923Z","ResumeSection":{"id":5,"IconClass":"none","Title":"Education"},"EducationItems":[{"id":1,"SchoolName":"Valencia College","DegreeType":"Technical Certificate","DegreeName":"Computer Programming","CompletedDate":"2005-06-01"},{"id":2,"SchoolName":"Valencia College","DegreeType":"A.S.","DegreeName":"Interactive Design","CompletedDate":"2006-06-01"}]}},"meta":{}}';
const SOCIAL = '{"data":{"id":1,"attributes":{"createdAt":"2024-09-08T16:10:03.782Z","updatedAt":"2024-09-08T21:10:35.436Z","publishedAt":"2024-09-08T21:10:35.432Z","ResumeSectionHeader":{"id":4,"IconClass":"none","Title":"Social"},"SocialMediaItems":[{"id":2,"IconAltText":"LinkedIn Logo","Url":"https://www.linkedin.com/in/adam-dill-37aa5682/","Icon":{"data":{"id":9,"attributes":{"name":"In-White-48@2x.png","alternativeText":null,"caption":null,"width":96,"height":96,"formats":null,"hash":"In_White_48_2x_1bf1b94596","ext":".png","mime":"image/png","size":0.54,"url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725828389/In_White_48_2x_1bf1b94596.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"In_White_48_2x_1bf1b94596","resource_type":"image"},"createdAt":"2024-09-08T20:46:29.454Z","updatedAt":"2024-09-08T20:46:29.454Z"}}}},{"id":3,"IconAltText":"Github Logo","Url":"https://github.com/adam-dill","Icon":{"data":{"id":5,"attributes":{"name":"github-mark-white.png","alternativeText":null,"caption":null,"width":230,"height":225,"formats":{"thumbnail":{"ext":".png","url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725828110/thumbnail_github_mark_white_40d37437a9.png","hash":"thumbnail_github_mark_white_40d37437a9","mime":"image/png","name":"thumbnail_github-mark-white.png","path":null,"size":5.48,"width":159,"height":156,"sizeInBytes":5479,"provider_metadata":{"public_id":"thumbnail_github_mark_white_40d37437a9","resource_type":"image"}}},"hash":"github_mark_white_40d37437a9","ext":".png","mime":"image/png","size":2.19,"url":"https://res.cloudinary.com/dt1hxx29w/image/upload/v1725828110/github_mark_white_40d37437a9.png","previewUrl":null,"provider":"cloudinary","provider_metadata":{"public_id":"github_mark_white_40d37437a9","resource_type":"image"},"createdAt":"2024-09-08T20:41:50.543Z","updatedAt":"2024-09-08T20:41:50.543Z"}}}}]}},"meta":{}}';
const TOOLBOX = '{"data":{"id":1,"attributes":{"createdAt":"2024-09-08T20:53:49.837Z","updatedAt":"2024-09-08T21:10:39.718Z","publishedAt":"2024-09-08T21:10:39.715Z","ResumeSectionHeader":{"id":6,"IconClass":"none","Title":"Toolbox"},"ListSections":[{"id":1,"Title":"Languages","ListItem":[{"id":1,"ItemText":"Javascript"},{"id":2,"ItemText":"Typescript"},{"id":3,"ItemText":"NodeJS"},{"id":4,"ItemText":"Actionscript"},{"id":5,"ItemText":"HTML5/CSS3"},{"id":6,"ItemText":"C#"},{"id":7,"ItemText":"ASP.NET"},{"id":8,"ItemText":"PHP"},{"id":9,"ItemText":"Objective-C"},{"id":11,"ItemText":"Swift"}]},{"id":2,"Title":"Libraries & Frameworks","ListItem":[{"id":12,"ItemText":"React"},{"id":10,"ItemText":"NextJS"},{"id":13,"ItemText":"jQuery"},{"id":14,"ItemText":"Angular"},{"id":15,"ItemText":"Backbone"},{"id":17,"ItemText":"Bootstrap"},{"id":16,"ItemText":"CakePHP"},{"id":18,"ItemText":"Flex"},{"id":19,"ItemText":"PureMVC"},{"id":20,"ItemText":"Robot Legs"},{"id":21,"ItemText":"Parsley"},{"id":22,"ItemText":"GraphQL"}]},{"id":3,"Title":"Other Tools","ListItem":[{"id":24,"ItemText":"Version Control (Git, SVN, Perforce)"},{"id":23,"ItemText":"Jira"},{"id":25,"ItemText":"Agile"},{"id":27,"ItemText":"NodeJS"},{"id":26,"ItemText":"Web Services (SOAP, REST, GraphQL)"},{"id":31,"ItemText":"Relational Database"},{"id":28,"ItemText":"Design Patterns"},{"id":30,"ItemText":"Batch/Bash Scripting"},{"id":29,"ItemText":"Unity Engine"}]}]}},"meta":{}}';

const MockData = {
    HEADER,
    ABOUT,
    CONTACT,
    EDUCATION,
    SOCIAL,
    TOOLBOX
};
export default MockData;