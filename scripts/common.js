// Game Data Structure
let gameData = {
    currentGame: null,
    savedGames: []
};

// DOM Elements
const screens = {
    mainMenu: document.getElementById('main-menu'),
    playerEntry: document.getElementById('player-entry'),
    gameScreen: document.getElementById('game-screen'),
    pastGames: document.getElementById('past-games'),
    resultsModal: document.getElementById('results-modal')
};

const elements = {
    // Main Menu
    newGameBtn: document.getElementById('new-game-btn'),
    pastGamesBtn: document.getElementById('past-games-btn'),
    
    // Player Entry
    playerNameInput: document.getElementById('player-name'),
    addPlayerBtn: document.getElementById('add-player-btn'),
    playersList: document.getElementById('players-list'),
    startGameBtn: document.getElementById('start-game-btn'),
    
    // Game Screen
    questionText: document.getElementById('question-text'),
    optionAText: document.getElementById('option-a-text'),
    optionBText: document.getElementById('option-b-text'),
    optionAPlayers: document.getElementById('option-a-players'),
    optionBPlayers: document.getElementById('option-b-players'),
    playerDeck: document.getElementById('player-deck'),
    finishQuestionBtn: document.getElementById('finish-question-btn'),
    skipQuestionBtn: document.getElementById('skip-question-btn'),
    
    // Results Modal
    questionResults: document.getElementById('question-results'),
    nextQuestionBtn: document.getElementById('next-question-btn'),
    
    // Past Games
    pastGamesList: document.getElementById('past-games-list'),
    backToMenuBtn: document.getElementById('back-to-menu-btn')
};

// For mobile drag and drop
let draggedElement = null;
let touchOffsetX = 0;
let touchOffsetY = 0;

// Initialize the game
function init() {
    loadGameData();
    setupEventListeners();
    
    // Always start at the main menu
    showScreen('mainMenu');
}

// Load saved game data from localStorage
function loadGameData() {
    const savedData = localStorage.getItem('wouldYouRatherGameData');
    if (savedData) {
        // Parse the saved data
        const parsedData = JSON.parse(savedData);
        
        // Only keep the savedGames array, discard any current game
        gameData.savedGames = parsedData.savedGames || [];
        gameData.currentGame = null;
    }
    
    // Save the cleared state back to localStorage
    saveGameData();
}

// Save game data to localStorage
function saveGameData() {
    // Simply save the entire game data object to localStorage
    localStorage.setItem('wouldYouRatherGameData', JSON.stringify(gameData));
}

// Set up event listeners
function setupEventListeners() {
    // Main Menu
    elements.newGameBtn.addEventListener('click', startNewGame);
    elements.pastGamesBtn.addEventListener('click', showPastGames);
    
    // Player Entry
    elements.addPlayerBtn.addEventListener('click', addPlayer);
    elements.playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayer();
    });
    elements.startGameBtn.addEventListener('click', setupGame);
    
    // Game Screen
    elements.finishQuestionBtn.addEventListener('click', completeQuestion);
    elements.skipQuestionBtn.addEventListener('click', skipQuestion);
    
    // Results Modal
    elements.nextQuestionBtn.addEventListener('click', nextQuestion);
    
    // Past Games
    elements.backToMenuBtn.addEventListener('click', () => showScreen('mainMenu'));
    document.getElementById('clear-all-games-btn').addEventListener('click', clearAllGames);
}

// Screen navigation
function showScreen(screenName) {
    // Hide all screens first
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    screens[screenName].classList.add('active');
}

// Start a new game
function startNewGame() {
    // Reset player list
    elements.playersList.innerHTML = '';
    elements.startGameBtn.disabled = true;
    
    // Show player entry screen
    showScreen('playerEntry');
}

// Add a player to the list
function addPlayer() {
    const playerName = elements.playerNameInput.value.trim();
    
    if (playerName) {
        // Create player card
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <span>${playerName}</span>
            <button class="delete-btn" aria-label="Delete player">×</button>
        `;
        
        // Add delete functionality
        playerCard.querySelector('.delete-btn').addEventListener('click', () => {
            playerCard.remove();
            updateStartButtonState();
        });
        
        // Add to the list
        elements.playersList.appendChild(playerCard);
        
        // Clear input
        elements.playerNameInput.value = '';
        elements.playerNameInput.focus();
        
        // Enable/disable start button
        updateStartButtonState();
    }
}

// Update the state of the start game button
function updateStartButtonState() {
    const playerCount = elements.playersList.children.length;
    elements.startGameBtn.disabled = playerCount < 2;
}

// Set up the game with players
function setupGame() {
    // Collect player names
    const players = [];
    const playerElements = elements.playersList.querySelectorAll('.player-card');
    
    playerElements.forEach(elem => {
        players.push({
            name: elem.querySelector('span').textContent,
            id: Date.now() + Math.floor(Math.random() * 1000)
        });
    });
    
    // Create new game object
    gameData.currentGame = {
        id: Date.now(),
        date: new Date().toISOString(),
        players,
        currentQuestionIndex: 0,
        questions: [...questions], // Make a copy of questions
        results: []
    };
    
    saveGameData();
    
    // Start the first question
    showQuestion();
}

// Show current question
function showQuestion() {
    // Clear previous state
    elements.optionAPlayers.innerHTML = '';
    elements.optionBPlayers.innerHTML = '';
    elements.playerDeck.innerHTML = '';
    elements.finishQuestionBtn.disabled = true;
    
    const game = gameData.currentGame;
    const currentQuestion = game.questions[game.currentQuestionIndex];
    
    // Display question and options
    elements.questionText.textContent = "Would you rather...";
    elements.optionAText.textContent = currentQuestion.optionA;
    elements.optionBText.textContent = currentQuestion.optionB;
    
    // Create player cards in the deck
    game.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'deck-player-card';
        playerCard.textContent = player.name;
        playerCard.dataset.playerId = player.id;
        playerCard.draggable = true;
        
        // Set up drag events
        playerCard.addEventListener('dragstart', handleDragStart);
        playerCard.addEventListener('dragend', handleDragEnd);
        
        // Touch events for mobile support
        playerCard.addEventListener('touchstart', handleTouchStart, { passive: false });
        playerCard.addEventListener('touchmove', handleTouchMove, { passive: false });
        playerCard.addEventListener('touchend', handleTouchEnd);
        
        elements.playerDeck.appendChild(playerCard);
    });
    
    // Set up drop zones
    setupDropZones();
    
    // Show game screen
    showScreen('gameScreen');
}

// Handle drag start event
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.playerId);
    e.target.classList.add('dragging');
}

// Handle drag end event
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Handle touch start for mobile
function handleTouchStart(e) {
    // Only handle single-touch events
    if (e.touches.length !== 1) return;
    
    e.preventDefault();
    draggedElement = this;
    draggedElement.classList.add('dragging');
    
    const touch = e.touches[0];
    const rect = draggedElement.getBoundingClientRect();
    
    // Calculate offset from the touch point to the element's top-left corner
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;
    
    // Create a clone for visual feedback
    const clone = draggedElement.cloneNode(true);
    clone.id = 'touch-drag-clone';
    clone.style.position = 'fixed';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.opacity = '0.8';
    clone.style.pointerEvents = 'none';
    clone.style.zIndex = '1000';
    document.body.appendChild(clone);
}

// Handle touch move for mobile
function handleTouchMove(e) {
    // Only handle single-touch events
    if (e.touches.length !== 1) return;
    
    e.preventDefault();
    if (!draggedElement) return;
    
    const touch = e.touches[0];
    const clone = document.getElementById('touch-drag-clone');
    
    if (clone) {
        // Update clone position
        clone.style.left = (touch.clientX - touchOffsetX) + 'px';
        clone.style.top = (touch.clientY - touchOffsetY) + 'px';
    }
    
    // Check if touching a drop zone
    const dropZones = [elements.optionAPlayers, elements.optionBPlayers];
    dropZones.forEach(zone => {
        const rect = zone.getBoundingClientRect();
        
        if (
            touch.clientX >= rect.left && 
            touch.clientX <= rect.right && 
            touch.clientY >= rect.top && 
            touch.clientY <= rect.bottom
        ) {
            // Highlight drop zone
            zone.classList.add('drag-over');
        } else {
            zone.classList.remove('drag-over');
        }
    });
}

// Handle touch end for mobile
function handleTouchEnd(e) {
    if (!draggedElement) return;
    
    // Remove clone
    const clone = document.getElementById('touch-drag-clone');
    if (clone) clone.remove();
    
    // Get the drop zone under the finger
    const touch = e.changedTouches[0];
    const dropZones = [elements.optionAPlayers, elements.optionBPlayers];
    
    let dropZone = null;
    dropZones.forEach(zone => {
        const rect = zone.getBoundingClientRect();
        
        if (
            touch.clientX >= rect.left && 
            touch.clientX <= rect.right && 
            touch.clientY >= rect.top && 
            touch.clientY <= rect.bottom
        ) {
            dropZone = zone;
        }
        
        zone.classList.remove('drag-over');
    });
    
    // If we have a valid drop zone, perform the drop
    if (dropZone) {
        // Create a clone for the drop zone
        const clone = document.createElement('div');
        clone.className = 'grid-player-card';
        clone.textContent = draggedElement.textContent;
        clone.dataset.playerId = draggedElement.dataset.playerId;
        
        // Add to drop zone
        dropZone.appendChild(clone);
        
        // Remove from deck
        draggedElement.remove();
        
        // Enable/disable finish button based on deck content
        elements.finishQuestionBtn.disabled = elements.playerDeck.children.length > 0;
    }
    
    draggedElement.classList.remove('dragging');
    draggedElement = null;
}

// Set up drop zones
function setupDropZones() {
    const dropZones = [elements.optionAPlayers, elements.optionBPlayers];
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', handleDrop);
    });
}

// Handle drop event
function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    const playerId = e.dataTransfer.getData('text/plain');
    const playerCard = document.querySelector(`.deck-player-card[data-player-id="${playerId}"]`);
    
    if (playerCard) {
        // Create a clone for the drop zone
        const clone = document.createElement('div');
        clone.className = 'grid-player-card';
        clone.textContent = playerCard.textContent;
        clone.dataset.playerId = playerCard.dataset.playerId;
        
        // Add to drop zone
        this.appendChild(clone);
        
        // Remove from deck
        playerCard.remove();
        
        // Enable/disable finish button based on deck content
        elements.finishQuestionBtn.disabled = elements.playerDeck.children.length > 0;
    }
}

// Complete the current question
function completeQuestion() {
    const game = gameData.currentGame;
    const currentQuestion = game.questions[game.currentQuestionIndex];
    
    // Collect results
    const optionAPlayerIds = Array.from(elements.optionAPlayers.querySelectorAll('.grid-player-card'))
        .map(card => card.dataset.playerId);
    
    const optionBPlayerIds = Array.from(elements.optionBPlayers.querySelectorAll('.grid-player-card'))
        .map(card => card.dataset.playerId);
    
    // Save results
    game.results.push({
        questionId: currentQuestion.id,
        questionText: "Would you rather...",
        optionA: currentQuestion.optionA,
        optionB: currentQuestion.optionB,
        optionAPlayerIds,
        optionBPlayerIds
    });
    
    // Save the current game state
    saveGameData();
    
    // Show results modal
    showResults();
}

// Show results in modal
function showResults() {
    const game = gameData.currentGame;
    const currentResult = game.results[game.results.length - 1];
    
    // Build results HTML
    let resultsHTML = `
        <div class="result-question">${currentResult.questionText}</div>
        <div class="result-options">
            <div class="result-option">
                <h4>${currentResult.optionA}</h4>
                <div class="result-players">
    `;
    
    // Option A players
    currentResult.optionAPlayerIds.forEach(playerId => {
        const player = game.players.find(p => p.id == playerId);
        resultsHTML += `<div class="result-player">${player.name}</div>`;
    });
    
    resultsHTML += `
                </div>
            </div>
            <div class="result-option">
                <h4>${currentResult.optionB}</h4>
                <div class="result-players">
    `;
    
    // Option B players
    currentResult.optionBPlayerIds.forEach(playerId => {
        const player = game.players.find(p => p.id == playerId);
        resultsHTML += `<div class="result-player">${player.name}</div>`;
    });
    
    resultsHTML += `
                </div>
            </div>
        </div>
    `;
    
    elements.questionResults.innerHTML = resultsHTML;
    
    // Show modal
    screens.resultsModal.classList.add('active');
}

// Move to next question or end game
function nextQuestion() {
    const game = gameData.currentGame;
    
    // Hide modal
    screens.resultsModal.classList.remove('active');
    
    // Move to next question or end game
    game.currentQuestionIndex++;
    
    // Save the current game state with the updated index
    saveGameData();
    
    if (game.currentQuestionIndex < game.questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// End the current game
function endGame() {
    const game = gameData.currentGame;
    
    // Check if any questions were skipped
    const skippedQuestions = game.questions.length - game.results.length;
    
    // Add completion data
    game.totalQuestions = game.questions.length;
    game.skippedQuestions = skippedQuestions;
    game.completionDate = new Date().toISOString();
    
    // Save completed game to savedGames
    gameData.savedGames.push({...game});
    
    // Clear the current game
    gameData.currentGame = null;
    
    // Save the updated game data
    saveGameData();
    
    // Show main menu
    showScreen('mainMenu');
    
    // Show a completion alert
    if (skippedQuestions > 0) {
        alert(`Game completed! ${skippedQuestions} question(s) were skipped. Check "Past Games" to see results.`);
    } else {
        alert('Game completed! Check "Past Games" to see results.');
    }
}

// Show past games screen
function showPastGames() {
    // Populate past games list
    elements.pastGamesList.innerHTML = '';
    
    if (gameData.savedGames.length === 0) {
        elements.pastGamesList.innerHTML = '<p>No past games found.</p>';
    } else {
        gameData.savedGames.forEach(game => {
            const date = new Date(game.completionDate || game.date).toLocaleDateString();
            const skippedText = game.skippedQuestions > 0 ? ` (${game.skippedQuestions} skipped)` : '';
            
            const gameCard = document.createElement('div');
            gameCard.className = 'past-game-card';
            gameCard.innerHTML = `
                <h3>Game from ${date}</h3>
                <p>${game.players.length} players · ${game.results.length} questions${skippedText}</p>
                <button class="btn secondary-btn view-game-btn">View Details</button>
            `;
            
            // Add view details functionality
            gameCard.querySelector('.view-game-btn').addEventListener('click', () => {
                viewPastGame(game.id);
            });
            
            elements.pastGamesList.appendChild(gameCard);
        });
    }
    
    // Show past games screen
    showScreen('pastGames');
}

// View past game details
function viewPastGame(gameId) {
    const game = gameData.savedGames.find(g => g.id === gameId);
    if (!game) return;
    
    // Create modal for past game details
    const modal = document.createElement('div');
    modal.className = 'modal past-game-details-modal active';
    
    // Format date
    const date = new Date(game.date).toLocaleDateString();
    
    // Create skipped questions text if any
    const skippedText = game.skippedQuestions > 0 
        ? `<p class="skipped-info">${game.skippedQuestions} question(s) were skipped</p>` 
        : '';
    
    // Create modal content
    let gameDetailsHTML = `
        <div class="modal-content past-game-details">
            <h2>Game from ${date}</h2>
            <p>${game.players.length} players participated · ${game.results.length} of ${game.totalQuestions || game.results.length} questions answered</p>
            ${skippedText}
            
            <div class="past-game-players">
                <h3>Players</h3>
                <div class="player-chips">
    `;
    
    // Add player chips
    game.players.forEach(player => {
        gameDetailsHTML += `<div class="player-chip">${player.name}</div>`;
    });
    
    gameDetailsHTML += `
                </div>
            </div>
            
            <div class="past-questions-container">
                <h3>Questions</h3>
    `;
    
    // Add each question and its results
    game.results.forEach((result, index) => {
        gameDetailsHTML += `
            <div class="past-question">
                <div class="past-question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <h4>${result.questionText}</h4>
                </div>
                
                <div class="past-options">
                    <div class="past-option">
                        <h5>${result.optionA}</h5>
                        <div class="past-option-players">
        `;
        
        // Option A players
        const optionAPlayers = result.optionAPlayerIds.map(id => 
            game.players.find(p => p.id == id)?.name || 'Unknown'
        );
        
        if (optionAPlayers.length === 0) {
            gameDetailsHTML += `<p class="no-players">No players chose this option</p>`;
        } else {
            optionAPlayers.forEach(name => {
                gameDetailsHTML += `<div class="past-player-choice">${name}</div>`;
            });
        }
        
        gameDetailsHTML += `
                        </div>
                    </div>
                    
                    <div class="past-option">
                        <h5>${result.optionB}</h5>
                        <div class="past-option-players">
        `;
        
        // Option B players
        const optionBPlayers = result.optionBPlayerIds.map(id => 
            game.players.find(p => p.id == id)?.name || 'Unknown'
        );
        
        if (optionBPlayers.length === 0) {
            gameDetailsHTML += `<p class="no-players">No players chose this option</p>`;
        } else {
            optionBPlayers.forEach(name => {
                gameDetailsHTML += `<div class="past-player-choice">${name}</div>`;
            });
        }
        
        gameDetailsHTML += `
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    gameDetailsHTML += `
            </div>
            
            <div class="modal-actions">
                <button id="close-past-game-btn" class="btn primary-btn">Close</button>
                <button id="delete-past-game-btn" class="btn danger-btn">Delete Game</button>
            </div>
        </div>
    `;
    
    modal.innerHTML = gameDetailsHTML;
    
    // Add to document
    document.body.appendChild(modal);
    
    // Add close button functionality
    document.getElementById('close-past-game-btn').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Add delete button functionality
    document.getElementById('delete-past-game-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this game? This action cannot be undone.')) {
            deletePastGame(gameId);
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
    
    // Add click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// Delete a past game
function deletePastGame(gameId) {
    // Find the game index
    const gameIndex = gameData.savedGames.findIndex(g => g.id === gameId);
    
    if (gameIndex !== -1) {
        // Remove from array
        gameData.savedGames.splice(gameIndex, 1);
        
        // Save updated data
        saveGameData();
        
        // Refresh the past games list
        showPastGames();
    }
}

// Clear all past games
function clearAllGames() {
    if (gameData.savedGames.length === 0) {
        alert('There are no saved games to clear.');
        return;
    }
    
    if (confirm('Are you sure you want to delete ALL saved games? This action cannot be undone.')) {
        // Clear saved games array
        gameData.savedGames = [];
        
        // Save updated data
        saveGameData();
        
        // Refresh the past games list
        showPastGames();
    }
}

// Skip the current question without saving
function skipQuestion() {
    const game = gameData.currentGame;
    
    if (confirm('Are you sure you want to skip this question? Player selections will not be saved.')) {
        // Move to next question without saving results
        game.currentQuestionIndex++;
        
        // Save the current game state with the updated index
        saveGameData();
        
        if (game.currentQuestionIndex < game.questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
