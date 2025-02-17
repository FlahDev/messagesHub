set -e

source "$(dirname -- $0)/../utils/chalk/chalk.sh"

chalk info "Running files format validations..." 

yarn --silent lint:staged

chalk valid "Files format is valid!"
