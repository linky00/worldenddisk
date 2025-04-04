import * as git from "isomorphic-git";
import fs from "fs";

let log = await git.log({
    fs,
    dir: ".",
});
let commits = log.map((commit) => ({
    message: commit.commit.message.trim(),
    hash: commit.oid.slice(0, 7),
    date: new Date(commit.commit.author.timestamp * 1000),
}));
fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/commits.json", JSON.stringify(commits, null, 4));
