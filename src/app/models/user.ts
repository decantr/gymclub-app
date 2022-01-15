export interface User {
  id: number,
  name: string,
  profilePicture: string,
  email: string,
  address: {
    line_1: string,
    line_2: string,
    postcode: string
  }
  contact_number: string,
  dob: Date,
}
