set -e

source "$(dirname -- $0)/../utils/chalk/chalk.sh"

chalk info "Running branch name validations..."

yarn --silent tsx "$(dirname -- $0)/../utils/validate-branch-name.ts"

chalk valid "Branch name is valid!"

chalk info "Running file format validations..."

yarn --silent lint

chalk valid "Files format is valid!"

chalk info "Running unit tests..."

yarn --silent test:ci

chalk valid "All test are valid!"

chalk info "Running build..."

yarn build

chalk valid "Build is valid!"
