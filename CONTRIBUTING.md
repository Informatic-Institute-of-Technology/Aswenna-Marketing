# Contributing to Aswenna

Thank you for your interest in contributing to Aswenna! This document provides guidelines and instructions for contributing to the project.

## Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Aswenna.git
   cd Aswenna
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Code Style

We use ESLint and Prettier to maintain code quality and consistency.

```bash
# Run linter
npm run lint

# Format code
npm run format
```

### Testing

Write tests for new features and bug fixes.

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:ci -- --coverage
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Build process or auxiliary tool changes

### Examples

```bash
feat(auth): add password reset functionality
fix(dashboard): correct crop statistics calculation
docs(readme): update installation instructions
```

## Pull Request Process

1. **Update documentation** - Update README.md and relevant docs
2. **Add tests** - Ensure your code is tested
3. **Run checks** - Make sure lint and tests pass
4. **Update CHANGELOG** - Add your changes to CHANGELOG.md
5. **Create PR** - Provide a clear description of changes
6. **Review** - Address review comments

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review performed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No new warnings
```

## Code Review Guidelines

### For Contributors

- Respond to feedback promptly
- Keep changes focused and atomic
- Write clear commit messages
- Update tests and documentation

### For Reviewers

- Be respectful and constructive
- Focus on code quality and maintainability
- Check for test coverage
- Verify documentation is updated

## Project Structure

```
/src
  /api              # API client code
  /assets           # Static assets
  /components       # Reusable components
  /features         # Feature modules
  /hooks            # Custom hooks
  /i18n             # Internationalization
  /pages            # Page components
  /routes           # Routing configuration
  /stores           # State management
  /test             # Test utilities
  /utils            # Helper functions
```

## Internationalization

When adding new UI text:

1. Add keys to all translation files:
   - `/src/i18n/locales/en/translation.json`
   - `/src/i18n/locales/si/translation.json`
   - `/src/i18n/locales/ta/translation.json`

2. Use the translation hook:
   ```tsx
   const { t } = useTranslation();
   <p>{t('your.translation.key')}</p>
   ```

## Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA)

## Performance

- Use React.memo() for expensive components
- Implement code splitting for routes
- Optimize images and assets
- Use lazy loading where appropriate
- Monitor bundle size

## Security

- Never commit secrets or API keys
- Validate all user inputs
- Use HTTPS for API calls
- Follow OWASP guidelines
- Report security issues privately

## Getting Help

- Check existing issues and documentation
- Join our Slack channel
- Ask questions in discussions
- Contact maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project website

Thank you for contributing to Aswenna! 🌾
