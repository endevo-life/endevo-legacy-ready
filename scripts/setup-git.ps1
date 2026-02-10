# Git Setup Script for ENDevo Team
# Run this script to configure your git settings

Write-Host "🚀 Setting up Git for ENDevo Project..." -ForegroundColor Green
Write-Host ""

# Prompt for GitHub username
$username = Read-Host "Enter your GitHub username (nermen/soyana/nermeen)"

# Prompt for email
$email = Read-Host "Enter your Git email"

# Configure Git for this repository
git config user.name "$username"
git config user.email "$email"

Write-Host ""
Write-Host "✅ Git configured successfully!" -ForegroundColor Green
Write-Host "   Username: $username" -ForegroundColor Cyan
Write-Host "   Email: $email" -ForegroundColor Cyan
Write-Host ""

# Show current configuration
Write-Host "📋 Current Git Configuration:" -ForegroundColor Yellow
git config user.name
git config user.email
Write-Host ""

# Fetch latest changes
Write-Host "📥 Fetching latest changes from origin..." -ForegroundColor Yellow
git fetch origin

Write-Host ""
Write-Host "🎉 Setup complete! You're ready to contribute." -ForegroundColor Green
Write-Host ""
Write-Host "📖 Next Steps:" -ForegroundColor Yellow
Write-Host "   1. Read .github/CONTRIBUTING.md for workflow" -ForegroundColor White
Write-Host "   2. Create a feature branch: git checkout -b feature/your-feature" -ForegroundColor White
Write-Host "   3. Make your changes and commit" -ForegroundColor White
Write-Host "   4. Push and create a Pull Request on GitHub" -ForegroundColor White
