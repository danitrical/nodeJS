class StudentService {

  constructor() {
    console.log('Student Service is initialised')
  }
  getStudents (params) {
    console.log({params})
  }
}

module.exports = StudentService;