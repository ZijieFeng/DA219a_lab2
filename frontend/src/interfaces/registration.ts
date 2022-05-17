export default interface IRegistration {
  _id: string
  course_code: string
  courses: ICourse[]
  student_id: string
  students: IStudent[]
  unix_timestamp: object
}

export interface IStudent {
  _id: string
  id: string
  email: string
  full_name: string
  hashed_password: string
}

export interface ICourse {
  _id: string
  code: string
  name: string
  description: string
}
