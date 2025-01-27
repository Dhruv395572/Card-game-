const emojis = ["😀", "😀", "😁", "😁", "😡", "😡", "🥵", "🥵", "🤨", "🤨", "😜", "😜", "😇", "😇", "😎", "😎"];

const shuf_emojis = emojis.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let matchedPairs = 0;
let score = 0;

const updateScore = () => {
    document.getElementById("score").textContent = `Score: ${score}`;
};


const gameBoard = document.querySelector(".game");
shuf_emojis.forEach((emoji) => {
    const box = document.createElement("div");
    box.className = "item";
    box.dataset.emoji = emoji;
    box.addEventListener("click", () => revealCard(box));
    gameBoard.appendChild(box);
});


const revealCard = (card) => {
    if (card.classList.contains("revealed") || card.classList.contains("matched")) return;

    card.classList.add("revealed");
    card.textContent = card.dataset.emoji;

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
};

const checkMatch = () => {
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedPairs++;
        score += 10; 
        updateScore();
        if (matchedPairs === emojis.length / 2) {
            alert("You won! Final Score: " + score);
        }
    } else {
  
        setTimeout(() => {
            firstCard.classList.remove("revealed");
            firstCard.textContent = ""; 
            firstCard.style.backgroundColor = ""; 
            secondCard.classList.remove("revealed");
            secondCard.textContent = ""; 
            secondCard.style.backgroundColor = ""; 
        }, 1000); 
    }
    firstCard = null;
    secondCard = null;
};
