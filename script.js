// Open the letter
function openLetter() {
    document.getElementById('envelopeContainer').style.display = 'none';
    document.getElementById('letterContainer').style.display = 'block';
}

// Show Terms & Conditions
function showTerms() {
    document.getElementById('letterContainer').style.display = 'none';
    document.getElementById('termsContainer').style.display = 'block';
}

// Accept Terms & Conditions
function acceptTerms() {
    document.getElementById('termsContainer').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
}

// Final acceptance message
function acceptFate() {
    document.getElementById('finalMessage').innerHTML = `
        <h2>Good! Now let’s get back to our ourselves🤗</h2>
    `;

    // Fade out effect
    setTimeout(() => {
        document.getElementById('finalMessage').style.opacity = "0";
    }, 3000);
}
