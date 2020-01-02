class ValidateMultipleInputs {
  constructor(input) {
    this.input = input;
  }

  /**
   *
   * @param {String} value
   * @param {String} type
   * @param {String} message
   */
  validateMultipleEmptyInputs(value, type, message) {
    if (!value) {
      this.input.errors[type] = message;
    } else {
      this.input.errors[type] = '';
    }
  }

  /**
   *
   * @param {String} value
   * @param {String} type
   * @param {String} message
   */
  validateMultipleEmails(email) {
    const emailValidationRegex = /\S+@\S+\.\S+/;
    if (email && !emailValidationRegex.test(email)) {
      this.input.errors.email = 'Please enter valid email';
    } else {
      delete [this.input.errors.email];
    }
  }

  /**
   *
   * @param {String} value
   * @param {String} type
   * @param {String} message
   */
  validateMultipleAmounts(amount) {
    const parsedInteger = parseInt(amount, 10);
    if (amount && !Number.isInteger(parsedInteger)
    ) {
      this.input.errors.amount = 'Please enter only integers';
    } else {
      delete [this.input.errors.amount];
    }
  }
}

export default ValidateMultipleInputs;
