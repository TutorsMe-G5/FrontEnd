export class UserTeacher {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  mail: string;
  photo: string;
  notifications: boolean;

  constructor(id: number, firstName: string, lastName: string, password: string, mail: string, photo: string, notifications: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.mail = mail;
    this.photo = photo;
    this.notifications = notifications;
  }
}
