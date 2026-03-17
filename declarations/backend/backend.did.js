export const idlFactory = ({ IDL }) => {
  const ImageData = IDL.Record({
    'contentType' : IDL.Text,
    'data' : IDL.Vec(IDL.Nat8),
  });
  const Bill = IDL.Record({
    'id' : IDL.Nat,
    'participants' : IDL.Vec(IDL.Principal),
    'name' : IDL.Text,
    'createdAt' : IDL.Int,
    'createdBy' : IDL.Principal,
    'isImage' : IDL.Bool,
    'amount' : IDL.Nat,
  });
  const User = IDL.Record({ 'id' : IDL.Principal, 'username' : IDL.Text });
  const Pact = IDL.Record({
    'name' : IDL.Text,
    'createdAt' : IDL.Int,
    'createdBy' : IDL.Principal,
    'isActive' : IDL.Bool,
    'currency' : IDL.Text,
  });
  const Debt = IDL.Record({
    'debtor' : User,
    'amount' : IDL.Int,
    'creditor' : User,
  });
  const UserSummary = IDL.Record({
    'total' : IDL.Int,
    'participant' : User,
    'spent' : IDL.Int,
    'bills' : IDL.Vec(
      IDL.Record({ 'name' : IDL.Text, 'payer' : User, 'amount' : IDL.Int })
    ),
    'debts' : IDL.Vec(Debt),
  });
  return IDL.Service({
    'addBill' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Vec(IDL.Principal), IDL.Opt(ImageData)],
        [Bill],
        [],
      ),
    'addUser' : IDL.Func([IDL.Principal, IDL.Text], [User], []),
    'addUserSelf' : IDL.Func([IDL.Text], [], []),
    'getAllBills' : IDL.Func([], [IDL.Vec(Bill)], []),
    'getAllUsers' : IDL.Func([], [IDL.Vec(User)], []),
    'getBillById' : IDL.Func([IDL.Nat], [Bill], []),
    'getImageByBillId' : IDL.Func([IDL.Nat], [ImageData], []),
    'getPact' : IDL.Func([], [Pact], []),
    'initPact' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
    'removeBillById' : IDL.Func([IDL.Nat], [], []),
    'settle' : IDL.Func([], [Pact], []),
    'summary' : IDL.Func([], [IDL.Vec(UserSummary)], []),
  });
};
export const init = ({ IDL }) => { return []; };
