interface UserLocalStorageInterface {
  username: string;
  email: string;
}

interface UserInterface extends UserLocalStorageInterface {
  id: string;
}

class User implements UserInterface {
  constructor(
    public id: string,
    public username: string,
    public email: string
  ) {}
}

export { UserLocalStorageInterface, UserInterface, User };
