function countUp(button) {
    const counterSpan = button.querySelector('.counter');
    let count = parseInt(counterSpan.textContent);
    count++;
    counterSpan.textContent = count;
}
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const zkrId = card.getAttribute('data-id');
        const savedCount = localStorage.getItem(zkrId);
        if (savedCount !== null) {
            card.querySelector('.counter').textContent = savedCount;
        }
    });
});

// زيادة العداد وحفظه
function countUp(button) {
    const card = button.closest('.card');
    const zkrId = card.getAttribute('data-id');
    const counterSpan = card.querySelector('.counter');
    
    let count = parseInt(counterSpan.textContent) || 0;
    count++;
    
    counterSpan.textContent = count;
    localStorage.setItem(zkrId, count);
}

// إعادة ضبط العداد
function resetCount(button) {
    const card = button.closest('.card');
    const zkrId = card.getAttribute('data-id');
    const counterSpan = card.querySelector('.counter');
    
    counterSpan.textContent = '0';
    localStorage.removeItem(zkrId);
}