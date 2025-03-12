db = db.getSiblingDB('mlops_activity');

db.createCollection('users');

db.users.insertMany([
  {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password1'
  },
  {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password2'
  }
]);