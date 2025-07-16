
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wordle Unlimited - Play Free Online Word Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 3rem;
            color: #2c3e50;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
            font-size: 1.3rem;
            color: #7f8c8d;
            font-weight: 300;
        }

        .hero {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .hero h2 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 30px;
            line-height: 1.8;
        }

        .play-button {
            display: inline-block;
            background: linear-gradient(45deg, #27ae60, #2ecc71);
            color: white;
            padding: 15px 40px;
            font-size: 1.3rem;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
            transition: all 0.3s ease;
            margin: 10px;
        }

        .play-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
        }

        .stats-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .stats-section h3 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 25px;
            text-align: center;
        }

        .stats-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .stats-table th {
            background: linear-gradient(45deg, #3498db, #2980b9);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: bold;
        }

        .stats-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
        }

        .stats-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }

        .stats-table tr:hover {
            background-color: #e3f2fd;
            transition: background-color 0.3s ease;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }

        .content-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .content-card h4 {
            font-size: 1.5rem;
            color: #2c3e50;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .content-card ul {
            list-style: none;
            padding-left: 0;
        }

        .content-card li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 25px;
        }

        .content-card li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }

        .features {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .features h3 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 30px;
            text-align: center;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        .feature {
            text-align: center;
            padding: 25px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }

        .feature:hover {
            transform: translateY(-5px);
        }

        .feature-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 15px;
        }

        .feature h4 {
            font-size: 1.3rem;
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .cta-bottom {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .cta-bottom h3 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 15px;
        }

        .cta-bottom p {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 25px;
        }

        footer {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        footer p {
            color: #7f8c8d;
            margin-bottom: 10px;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }
            
            .hero h2 {
                font-size: 1.8rem;
            }
            
            .play-button {
                padding: 12px 25px;
                font-size: 1.1rem;
            }
            
            .stats-table {
                font-size: 0.9rem;
            }
            
            .stats-table th,
            .stats-table td {
                padding: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🟩 Wordle Unlimited 🟩</h1>
            <p class="subtitle">Play the endless word puzzle game without limits!</p>
        </header>

        <main>
            <section class="hero">
                <h2>Welcome to Wordle Unlimited</h2>
                <p>Experience the addictive word-guessing game that took the world by storm! Unlike the original Wordle, you can play as many games as you want, whenever you want. Challenge yourself with unlimited puzzles and improve your vocabulary skills.</p>
                
                <a href="https://wordleunlimitedunblocked.com/" class="play-button" rel="dofollow">
                    🎮 Wordle Unlimited 🎮
                </a>
            </section>

            <section class="stats-section">
                <h3>Latest Game Statistics</h3>
                <table class="stats-table">
                    <thead>
                        <tr>
                            <th>Game #</th>
                            <th>Date</th>
                            <th>Average Guesses</th>
                            <th>Success Rate</th>
                            <th>Most Common First Word</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1247</td>
                            <td>Today</td>
                            <td>4.2</td>
                            <td>94%</td>
                            <td>ADIEU</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>1246</td>
                            <td>Yesterday</td>
                            <td>3.8</td>
                            <td>96%</td>
                            <td>CRANE</td>
                            <td>Easy</td>
                        </tr>
                        <tr>
                            <td>1245</td>
                            <td>2 days ago</td>
                            <td>4.7</td>
                            <td>89%</td>
                            <td>STARE</td>
                            <td>Hard</td>
                        </tr>
                        <tr>
                            <td>1244</td>
                            <td>3 days ago</td>
                            <td>4.1</td>
                            <td>93%</td>
                            <td>AROSE</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>1243</td>
                            <td>4 days ago</td>
                            <td>3.9</td>
                            <td>95%</td>
                            <td>AUDIO</td>
                            <td>Easy</td>
                        </tr>
                        <tr>
                            <td>1242</td>
                            <td>5 days ago</td>
                            <td>4.5</td>
                            <td>91%</td>
                            <td>SAINT</td>
                            <td>Hard</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div class="content-grid">
                <div class="content-card">
                    <h4>🎯 How to Play</h4>
                    <ul>
                        <li>Guess the 5-letter word in 6 tries</li>
                        <li>Each guess must be a valid word</li>
                        <li>Green = correct letter in correct position</li>
                        <li>Yellow = correct letter in wrong position</li>
                        <li>Gray = letter not in the word</li>
                        <li>Use clues to narrow down possibilities</li>
                    </ul>
                </div>

                <div class="content-card">
                    <h4>🌟 Why Play Unlimited?</h4>
                    <ul>
                        <li>No daily limit - play as much as you want</li>
                        <li>Practice mode for beginners</li>
                        <li>Different difficulty levels available</li>
                        <li>Track your progress and statistics</li>
                        <li>Share your results with friends</li>
                        <li>Improve vocabulary and word skills</li>
                    </ul>
                </div>

                <div class="content-card">
                    <h4>💡 Pro Tips & Strategies</h4>
                    <ul>
                        <li>Start with vowel-rich words like ADIEU</li>
                        <li>Use common consonants early (R, S, T, L, N)</li>
                        <li>Avoid repeating yellow letters in same position</li>
                        <li>Think about word patterns and endings</li>
                        <li>Don't rush - analyze each clue carefully</li>
                        <li>Learn from failed attempts</li>
                    </ul>
                </div>
            </div>

            <section class="features">
                <h3>Features of Wordle Unlimited</h3>
                <div class="features-grid">
                    <div class="feature">
                        <span class="feature-icon">🎮</span>
                        <h4>Unlimited Games</h4>
                        <p>Play as many rounds as you want without waiting for the next day. Perfect for word puzzle enthusiasts!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">📊</span>
                        <h4>Detailed Statistics</h4>
                        <p>Track your win rate, average guesses, and improvement over time with comprehensive stats.</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🏆</span>
                        <h4>Multiple Difficulties</h4>
                        <p>Choose from easy, medium, or hard modes to match your skill level and challenge yourself.</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🚀</span>
                        <h4>Fast & Free</h4>
                        <p>No downloads, no registration required - just instant word puzzle fun in your browser.</p>
                    </div>
                </div>
            </section>

            <section class="cta-bottom">
                <h3>Ready to Test Your Word Skills?</h3>
                <p>Join millions of players worldwide in the ultimate word puzzle challenge!</p>
                <a href="https://wordleunlimitedunblocked.com/" class="play-button" rel="dofollow">
                    Start Playing Wordle Unlimited Now!
                </a>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Wordle Unlimited Fan Site. Play the original game and discover the unlimited version!</p>
            <p>Challenge your mind with endless word puzzles. Expand your vocabulary and have fun!</p>
        </footer>
    </div>

    <script>
        // Simple interactive features
        document.addEventListener('DOMContentLoaded', function() {
            // Add click animation to buttons
            const buttons = document.querySelectorAll('.play-button');
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });

            // Add hover effect to table rows
            const tableRows = document.querySelectorAll('.stats-table tbody tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#e3f2fd';
                });
                row.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '';
                });
            });

            // Simple statistics counter animation
            const stats = document.querySelectorAll('.stats-table td');
            stats.forEach((stat, index) => {
                if (stat.textContent.includes('%') || !isNaN(parseFloat(stat.textContent))) {
                    stat.style.opacity = '0';
                    setTimeout(() => {
                        stat.style.transition = 'opacity 0.5s ease';
                        stat.style.opacity = '1';
                    }, index * 100);
                }
            });

            // Update current date in table
            const today = new Date();
            const dateOptions = { month: 'short', day: 'numeric' };
            const todayStr = today.toLocaleDateString('en-US', dateOptions);
            
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toLocaleDateString('en-US', dateOptions);

            // Update table with current dates
            const dateCell = document.querySelector('.stats-table tbody tr:first-child td:nth-child(2)');
            if (dateCell && dateCell.textContent === 'Today') {
                dateCell.textContent = todayStr;
            }
        });

        // Add some fun interactions
        function addWordleColors() {
            const features = document.querySelectorAll('.feature');
            const colors = ['#6aaa64', '#c9b458', '#787c7e', '#6aaa64'];
            
            features.forEach((feature, index) => {
                feature.addEventListener('mouseenter', function() {
                    this.style.borderLeft = `5px solid ${colors[index % colors.length]}`;
                    this.style.transition = 'all 0.3s ease';
                });
                
                feature.addEventListener('mouseleave', function() {
                    this.style.borderLeft = 'none';
                });
            });
        }

        // Call the function after page loads
        setTimeout(addWordleColors, 1000);
    </script>
</body>
</html>
