# NVM Cheat Sheet

[nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) is a convenient tool to install and manage different versions of [Node JS](https://nodejs.org/en/).

Here, you are going to find some usefull commands for everyday tasks. For a full description of its capabilities, please visit its official GitHub Repo: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

## Instalation & Update

To install or update `nvm`, you should execute the following commands on any POSIX-compliant Shell (sh, dash, bash, zsh, ...):

- Using cURL:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

- Using Wget:
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

> **p.s.:** make sure you add the link that corresponds to your desired `nvm` version.

On linux, cURL and Wget, respectively, can be installed by running:

```sh
sudo apt install curl    # installs cURL
sudo apt install wget    # installs Wget
```

### Verifying instalation

As suggested in the official Repo, the installation can be checked by running: 

```sh
command -v nvm     # if the installation was successful, it should print out nvm
```

Additionally, you can check the `nvm` version easily:

```sh
nvm --version      # or just nvm -v
```

