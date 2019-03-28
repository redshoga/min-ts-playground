interface User {
  name: string;
  id: number;
}

function consoleUser(user: User): void {
  console.log("name: ", user.name);
  console.log("id: ", user.id);
}

const sampleUser: User = {
  name: "redshoga",
  id: 114514
}

consoleUser(sampleUser);
