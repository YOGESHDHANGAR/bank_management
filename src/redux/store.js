import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accessLogReducer from "./reducers/accessLogReducer";
import accountReducer from "./reducers/accountReducer";
import accountTypeReducer from "./reducers/accountTypeReducer";
import addressReducer from "./reducers/addressReducer";
import auditLogReducer from "./reducers/auditLogReducer";
import cashTransactionReducer from "./reducers/cashTransactionReducer";
import chequeReducer from "./reducers/chequeReducer";
import contactReducer from "./reducers/contactReducer";
import currencyReducer from "./reducers/currencyReducer";
import customerReducer from "./reducers/customerReducer";
import interestRateReducer from "./reducers/interestRateReducer";
import kYCDocumentReducer from "./reducers/kYCDocumentReducer";
import loanReducer from "./reducers/loanReducer";
import notificationReducer from "./reducers/notificationReducer";
import onlineBankingReducer from "./reducers/onlineBankingReducer";
import paymentGatewayReducer from "./reducers/paymentGatewayReducer";
import reportReducer from "./reducers/reportReducer";
import roleReducer from "./reducers/roleReducer";
import thirdPartyServiceReducer from "./reducers/thirdPartyServiceReducer";
import transactionReducer from "./reducers/transactionReducer";
import userReducer from "./reducers/userReducer";

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  accessLogs: accessLogReducer,
  accounts: accountReducer,
  accountTypes: accountTypeReducer,
  addresses: addressReducer,
  auditLogs: auditLogReducer,
  cashTransactions: cashTransactionReducer,
  cheques: chequeReducer,
  contacts: contactReducer,
  currencies: currencyReducer,
  customers: customerReducer,
  interestRates: interestRateReducer,
  kycDocuments: kYCDocumentReducer,
  loans: loanReducer,
  notifications: notificationReducer,
  onlineBankingAccount: onlineBankingReducer,
  paymentGateways: paymentGatewayReducer,
  reports: reportReducer,
  roles: roleReducer,
  thirdPartyServices: thirdPartyServiceReducer,
  transactions: transactionReducer,
  users: userReducer,
});

// Create the Redux store with the root reducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
