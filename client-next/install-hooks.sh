#!/bin/bash

# Create .husky directory if it doesn't exist
mkdir -p .husky

# # Create pre-push hook
# echo '#!/bin/sh' > .husky/pre-push
# echo 'yarn build' >> .husky/pre-push
# chmod +x .husky/pre-push

# Create pre-commit hook
echo '#!/bin/sh' > .husky/pre-commit
echo 'yarn lint' >> .husky/pre-commit
chmod +x .husky/pre-commit

echo "Husky hooks have been set up successfully."