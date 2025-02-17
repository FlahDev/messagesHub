set -e

source "$(dirname -- $0)/../utils/chalk/chalk.sh"

chalk info "Running commit message validations..."

yarn --silent commitlint --edit ${1} &&

chalk valid "Commit message is valid!"

