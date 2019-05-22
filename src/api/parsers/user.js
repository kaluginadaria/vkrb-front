export default (data) => {
  return {
    email: data['email'],
    name: data['first_name'],
  }
}