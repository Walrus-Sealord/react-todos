import {Accounts} from "meteor/accounts-base";

// configure Login for userName only

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});
