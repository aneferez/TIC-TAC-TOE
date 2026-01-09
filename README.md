Tic-Tac-Toe Game - A classic two-player board game built with React and Vite.

Key Features:

Game Logic: Two-player gameplay (X vs O) with automatic winner detection
Winner Detection: Checks all 8 possible winning combinations (rows, columns, diagonals)
Draw Detection: Identifies when the game ends in a tie
Game State: Tracks whose turn it is (alternates between X and O)
Restart Functionality: Reset button to start a new game
Visual Feedback: Displays current player and game status (winner/draw)
Technology Stack:

Framework: React 19.2.0
Build Tool: Vite 7.2.4 (fast development server & bundler)
Styling: Custom CSS with animations and styling
Development: ESLint for code quality, React Compiler enabled for optimizations
Project Structure:

3x3 grid board with clickable squares
Reusable Square component for each cell
Board component managing grid layout
App component handling game state and logic
