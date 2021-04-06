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


## Listing all available versions of Node JS

- remotely (all available versions for instalation):
```sh
nvm ls-remote
```

- locally (all installed versions):
```sh
nvm ls
```

## Installing Node JS

```sh
nvm install node         # installs the latest node version
nvm install --lts        # installs the latest LTS node version
nvm install v14.16.0     # installs any specified version of node
```

## Switching between different Node versions

```sh
nvm use node        # activates the default (if not changed by the user, it's the most recent) version of node
nvm use --lts       # activates the latest LTS version installed
nvm use v14.16.0    # activates the specified version 
```

## Changing the system's default Node version

```sh
nvm alias default v14.16.0  # from now on, this is the version activated when running the command: nvm use node
```

## Showing the current version of Node

```sh
nvm current
```

## Finding the path to a installed node version

```sh
nvm which v14.16.0    # just add the desired version
```

## Getting Help 

```sh
nvm --help    # read the docs
```