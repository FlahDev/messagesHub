chalk() {
  yarn --silent tsx "$(dirname ${BASH_SOURCE[0]})/chalk-2-bash.ts" "$1" "$2"
}
