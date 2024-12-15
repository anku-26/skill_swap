function goToPage(page) {
    window.location.href = page;
}

function searchSwap() {
    const know = document.getElementById('know').value.toLowerCase();
    const learn = document.getElementById('learn').value.toLowerCase();
    const results = document.getElementById('results');
    const loader = document.getElementById('loader');
    const users = [
        {name: 'Ankush', skill: 'english', wants: 'japanese'},
        {name: 'Abhishek', skill: 'japanese', wants: 'english'},
        {name: 'Akshay', skill: 'hindi', wants: 'marathi'},
        {name: 'Chandan', skill: 'python', wants: 'java'},
        {name: 'Amardeep', skill: 'java', wants: 'python'}
    ];

    const filteredUsers = users.filter(user => user.skill === learn && user.wants === know);
    results.innerHTML = '';
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        results.innerHTML = `<p>Searching for users who know ${know} and want to learn ${learn}...</p>`;
        if (filteredUsers.length > 0) {
            results.innerHTML += filteredUsers.map(user => `
                <div class="profile">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Knows:</strong> ${user.skill}</p>
                    <p><strong>Wants to learn:</strong> ${user.wants}</p>
                </div>
            `).join('');
        } else {
            results.innerHTML += `<p>No matches found.</p>`;
        }
    }, 2000);
}

function showTaskForm() {
    document.getElementById('taskModal').style.display = 'block';
}

function closeTaskForm() {
    document.getElementById('taskModal').style.display = 'none';
}

function postTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDesc = document.getElementById('taskDesc').value;
    const taskList = document.getElementById('taskList');
    if (taskName && taskDesc) {
        taskList.innerHTML += `<div class="task">
            <h3>${taskName}</h3>
            <p>${taskDesc}</p>
            <p><strong>Posted by:</strong> Ankush</p>
            <input type="text" placeholder="Place your bid">
            <button onclick="showBid(this)">Bid</button>
            <div class="bid-container"></div>
        </div>`;
        closeTaskForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function showBid(button) {
    const bidContainer = button.nextElementSibling;
    const bidInput = bidContainer.previousElementSibling;
    const bidValue = bidInput.value;
    if (bidValue) {
        bidContainer.innerHTML += `<p><strong>Your Bid:</strong> ${bidValue}</p>`;
    } else {
        alert('Please enter a bid.');
    }
}

// Dummy data for task list
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const dummyTasks = [
        {name: 'Translate a document', desc: 'Translate a 10-page document from English to Japanese.', poster: 'Chandan'},
        {name: 'Web development help', desc: 'Help me debug my React application.', poster: 'Abhishek'},
        {name: 'Graphic design', desc: 'Create a logo for my startup.', poster: 'Akshay'},
        {name: 'Content Writing', desc: 'Write SEO-friendly articles for my blog.', poster: 'Amardeep'},
        {name: 'Data Analysis', desc: 'Analyze a set of data and provide insights.', poster: 'Sonu'}
    ];
    taskList.innerHTML = dummyTasks.map(task => `
        <div class="task">
            <h3>${task.name}</h3>
            <p>${task.desc}</p>
            <p><strong>Posted by:</strong> ${task.poster}</p>
            <input type="text" placeholder="Place your bid">
            <button onclick="showBid(this)">Bid</button>
            <div class="bid-container"></div>
        </div>
    `).join('');
});
