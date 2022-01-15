export interface Booking {
  id: number,
  user_id: number,
  type?: string,
  date_from?: Date,
  date_to?: Date,
}
