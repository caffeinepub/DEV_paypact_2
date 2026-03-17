import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Bill {
  'id' : bigint,
  'participants' : Array<Principal>,
  'name' : string,
  'createdAt' : bigint,
  'createdBy' : Principal,
  'isImage' : boolean,
  'amount' : bigint,
}
export interface Debt { 'debtor' : User, 'amount' : bigint, 'creditor' : User }
export interface ImageData {
  'contentType' : string,
  'data' : Uint8Array | number[],
}
export interface Pact {
  'name' : string,
  'createdAt' : bigint,
  'createdBy' : Principal,
  'isActive' : boolean,
  'currency' : string,
}
export interface User { 'id' : Principal, 'username' : string }
export interface UserSummary {
  'total' : bigint,
  'participant' : User,
  'spent' : bigint,
  'bills' : Array<{ 'name' : string, 'payer' : User, 'amount' : bigint }>,
  'debts' : Array<Debt>,
}
export interface _SERVICE {
  'addBill' : ActorMethod<
    [string, bigint, Array<Principal>, [] | [ImageData]],
    Bill
  >,
  'addUser' : ActorMethod<[Principal, string], User>,
  'addUserSelf' : ActorMethod<[string], undefined>,
  'getAllBills' : ActorMethod<[], Array<Bill>>,
  'getAllUsers' : ActorMethod<[], Array<User>>,
  'getBillById' : ActorMethod<[bigint], Bill>,
  'getImageByBillId' : ActorMethod<[bigint], ImageData>,
  'getPact' : ActorMethod<[], Pact>,
  'initPact' : ActorMethod<[string, string, string], undefined>,
  'removeBillById' : ActorMethod<[bigint], undefined>,
  'settle' : ActorMethod<[], Pact>,
  'summary' : ActorMethod<[], Array<UserSummary>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
