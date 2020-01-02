class ValidateInput {
  constructor(error) {
    this.error = error;
  }

  /**
   *
   * @param {String} value
   * @param {String} type
   * @param {String} message
   */
  emptyInput(value, type, message) {
    if (!value) {
      this.error[type] = message;
    } else {
      this.error[type] = '';
    }
  }

  /**
   *
   * @param {String} email
   */
  invalidEmail(email) {
    const emailValidationRegex = /\S+@\S+\.\S+/;
    if (email && !emailValidationRegex.test(email)) {
      this.error.email = 'Please enter valid email';
    } else {
      delete [this.error.email];
    }
  }

  /**
   *
   * @param {String} firstPassword
   * @param {String} secondPassword
   */
  confirmPassword(firstPassword, secondPassword) {
    if (firstPassword && secondPassword && firstPassword.trim() !== secondPassword.trim()) {
      this.error.confirmPassword = 'Passwords do not match';
    } else {
      delete [this.error.confirmPassword];
    }
  }
}

export default ValidateInput;
