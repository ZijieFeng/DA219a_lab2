export default function useTableColumns() {
  const columns = [
    { field: 'student_id', title: 'Student ID' },
    { field: 'student_name', title: 'Student Name' },
    { field: 'course_name', title: 'Course Name' },
    { field: 'registration_time', title: 'Registration Time' },
  ]

  return columns
}
