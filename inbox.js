const hasNewMessage = () => Math.random() < 0.2;

const sample = array => array[Math.floor(Math.random() * array.length)];

const newMessage = () => {
    const senders = ['Microsoft', 'Facebook', 'Google', 'Apple'];
    const subjects = [  'Exciting Job Opportunity Awaits You!',
        'Welcome to the Future of Tech!',
        'Unleash Your Coding Superpowers!',
        'Your Dream Job Is Just a Click Away!'];

    return {
        sender: sample(senders),
        subject: sample(subjects)
    };
};

const appendMessageToDom = (message) => {
    const line = `<div class="row message unread">
    <div class="col-3">${message.sender}</div>
    <div class="col-9">${message.subject}</div>
  </div>`;
    document.getElementById('inbox').insertAdjacentHTML('afterbegin', line);
};

const updateUnreadCount = () => {
    const unreadCount = document.querySelectorAll('.message.unread').length;
    document.getElementById('count').innerText = `(${unreadCount})`;
    document.title = `(${unreadCount}) Fake Inbox`;
};

const refresh = () => {
    if (hasNewMessage()) {
        appendMessageToDom(newMessage());
        updateUnreadCount();
    }
};

if (typeof window === "object") {
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
    });
}