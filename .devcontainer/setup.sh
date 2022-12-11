apt-get update
apt-get install -y \
  curl \
  git \
  gnupg2 \
  jq \
  sudo \
  zsh \
  vim \
  build-essential \
  openssl

## Install rustup and common components
curl -fsSL https://deno.land/x/install/install.sh | sh
deno run -A -r https://fresh.deno.dev my-project
