interface UserInterface {
  id: string;
  username: string;
  email: string;
}

class User implements UserInterface {
  constructor(
    public id: string,
    public username: string,
    public email: string
  ) {}
}

export { UserInterface, User };
