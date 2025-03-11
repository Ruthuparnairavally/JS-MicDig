const name = 'joseph';
const age = 25;
const job = 'web developer';
const city = 'miami';

// // Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
 
// document.body.innerHTML = html;

// With template strings (es6)

html =`<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    </ul>`;

document.body.innerHTML = html;

function hello(){
    return 'hello';
}
