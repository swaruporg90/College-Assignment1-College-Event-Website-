document.addEventListener('DOMContentLoaded', () => {
    const ticketSpan = document.getElementById('ticketCount');
    const form = document.getElementById('nexusForm');
    const cards = document.querySelectorAll('.event-card');

    let count = 50;
    const countdown = setInterval(() => {
        if (count > 7) {
            count--;
            ticketSpan.innerText = count;
        }
    }, 5000);

   
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,242,255,0.15) 0%, transparent 80%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.05)';
        });
    });

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('studentName').value;
        const email = document.getElementById('studentEmail').value;

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.trim().length < 3) {
            alert("Error: Name must be at least 3 characters.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Error: Please provide a valid college email.");
            return;
        }

        
        form.innerHTML = `<div class="success-msg">
            <h3>Registration Successful!</h3>
            <p>Check your email: <strong>${email}</strong> for your Nexus ID.</p>
        </div>`;
    });

    
    document.getElementById('exploreBtn').onclick = () => {
        document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
    };
});