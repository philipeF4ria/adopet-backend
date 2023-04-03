type IUser = {
  name: string;
  email: string;
  password: string;
}

class User {
  name: string;
  email: string;
  password: string;

  private constructor(props: IUser) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password
  }

  static async create(props: IUser) {
    if (!props.name || !props.email || !props.password) {
      throw new Error('All fields are required');
    }

    const user = new User(props);

    return user;
  }
}

export { User }
