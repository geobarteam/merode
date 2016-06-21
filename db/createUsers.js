use merode
db.runCommand({
    updateUser: "merodeUser",
    roles:[{role:"dbOwner", db:"merode"}]
    })