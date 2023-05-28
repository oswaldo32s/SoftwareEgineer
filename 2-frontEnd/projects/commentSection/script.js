var commentSection = document.getElementById('comments');
var testP = document.getElementById('test-p');
var mainContent = document.querySelector('main')
let commentNumber = 0;


document.getElementById('comment-form').onsubmit = function(event) {
    // Prevent the default form submission
    event.preventDefault(); 
    // keeps the new elements if not added it won't keep the new text

    // Get the values from the input fields
    var title = document.getElementById('title').value;
    var subtitle = document.getElementById('subTitle').value;
    var content = document.getElementById('comment-content').value;

    // Add new comment to website
    let breakElement1 = document.createElement('br');
    commentSection.appendChild(breakElement1);
    let commentTitle = document.createElement('h2');
    commentTitle.id = 'commentTitle' + commentNumber.toString();
    commentTitle.innerHTML = title;
    commentSection.appendChild(commentTitle);

    let commentSubtitle = document.createElement('h3');
    commentSubtitle.id = 'commentSubtitle' + commentNumber.toString();
    commentSubtitle.innerHTML = subtitle;
    commentSection.appendChild(commentSubtitle);

    let commentContent = document.createElement('p');
    commentContent.id = 'commentContent' + commentNumber.toString();
    commentContent.innerHTML = content;
    commentSection.appendChild(commentContent); 
    
    let breakElement = document.createElement('br');
    commentSection.appendChild(breakElement);

    this.reset();

    commentNumber++;
}