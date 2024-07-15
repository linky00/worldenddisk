const core = require('@actions/core');
const git = require('isomorphic-git');
const fs = require('fs');

async function run() {
    try {
        let log = await git.log({
            fs,
            dir: '.'
        });
        let commits = log.map((commit) => ({
            message: commit.commit.message.trim(),
            hash: commit.oid.slice(0, 7),
            date: new Date(commit.commit.author.timestamp * 1000)
        }));
        fs.writeFileSync('data/commits.json', JSON.stringify(commits, null, 4));
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();