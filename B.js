function signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username && password) {
        alert('Signup successful! Now login.');
    } else {
        alert('Please enter username and password.');
    }
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('home-container').classList.remove('hidden');
    } else {
        alert('Please enter username and password.');
    }
}

function logout() {
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('home-container').classList.add('hidden');
    document.getElementById('chat-container').classList.add('hidden');
}

function openChatbot() {
    document.getElementById('home-container').classList.add('hidden');
    document.getElementById('chat-container').classList.remove('hidden');
}

function closeChatbot() {
    document.getElementById('chat-container').classList.add('hidden');
    document.getElementById('home-container').classList.remove('hidden');
}

function showAnswer(question) {
    let responses = {
        "coverage": "Health insurance typically covers doctor visits, hospital stays, medications, and preventive care.",
        "apply": "You can apply for health insurance through your employer, government programs, or private providers.",
        "claim": "To file a claim, submit the required medical documents and bills to your insurance provider.",
        "premium": "Premium costs vary based on the plan, age, and coverage type. Check with providers for exact pricing.",
        "change": "Yes, you can change your plan during the open enrollment period or with a qualifying life event.",
        "hmo_vs_ppo": "HMO plans require referrals and have lower costs, PPOs offer more flexibility but higher premiums, and EPOs combine elements of both.",
        "deductible": "A deductible is the amount you must pay out-of-pocket before your insurance starts covering costs.",
        "missed_payment": "Missing a premium payment may result in a grace period, but extended delays could lead to policy cancellation.",
        "pre_existing": "Pre-existing conditions may have waiting periods or limited coverage depending on the policy and regulations.",
        "denied_claim": "If a claim is denied, you can appeal by submitting additional documents and clarifications to your insurer.",
        "tax_benefits": "In many countries, health insurance premiums may be tax-deductible. Check with a tax advisor for details.",
        "international": "Some health insurance plans offer international coverage, but you may need travel insurance for broader protection.",
        "copay": "A co-pay is a fixed amount you pay for services, like $20 for a doctor visit, with the rest covered by insurance.",
        "network_coverage": "In-network providers have agreements with insurers for lower costs, while out-of-network services may be more expensive."
    };
    
    let chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = `<p><strong>Bot:</strong> ${responses[question]}</p>`;
}
