const WrongAccountNameException = require('./thirdparty/wrong-account-name-exception');
const WrongPasswordException = require('./thirdparty/wrong-password-exception');

module.exports = class AccountRegistration {
    constructor() {
        this.passwordValidator = null;
        this.accountManager = null;
    }

    register(newAccount) {
        try {
            this.validateAccountNameLength(newAccount);
            this.validatePassword(newAccount);
            newAccount.setCreatedDate(new Date());
            const addresses = this.collectAddresses(newAccount);
            newAccount.setAddresses(addresses);
            this.accountManager.createNewAccount(newAccount);
        } catch (error) {
            throw error;
        }
    }

    setAccountManager(manager) {
        this.accountManager = manager;
    }

    setPasswordValidator(validator) {
        this.passwordValidator = validator;
    }

    validatePassword(account) {
        const password = account.password;
        if (password.length <= 8) {
            if (this.passwordValidator.validate(password) !== this.passwordValidator.result.OK) {
                throw new WrongPasswordException();
            }
        }
    }

    validateAccountNameLength(account) {
        if (account.name.length <= 5) {
            throw new WrongAccountNameException(account.name);
        }
    }

    collectAddress(account) {
        const addresses = new Set();
        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());
        return addresses;
    }
};
