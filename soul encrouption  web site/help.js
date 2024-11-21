function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    // Toggle the answer visibility
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
    
    // Toggle the active class to change color to pink
    element.classList.toggle("active");
}
