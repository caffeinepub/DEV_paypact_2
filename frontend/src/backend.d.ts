import { type HttpAgentOptions, type ActorConfig, type Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import { CreateActorOptions } from "declarations/backend";
import { _SERVICE } from "declarations/backend/backend.did.d.js";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ImageData {
    contentType: string;
    data: Uint8Array | number[];
}
export interface Debt {
    debtor: User;
    amount: bigint;
    creditor: User;
}
export interface Pact {
    name: string;
    createdAt: bigint;
    createdBy: Principal;
    isActive: boolean;
    currency: string;
}
export interface Bill {
    id: bigint;
    participants: Array<Principal>;
    name: string;
    createdAt: bigint;
    createdBy: Principal;
    isImage: boolean;
    amount: bigint;
}
export interface UserSummary {
    total: bigint;
    participant: User;
    spent: bigint;
    bills: Array<{
        name: string;
        payer: User;
        amount: bigint;
    }>;
    debts: Array<Debt>;
}
export interface User {
    id: Principal;
    username: string;
}
export declare const createActor: (canisterId: string | Principal, options?: CreateActorOptions, processError?: (error: unknown) => never) => backendInterface;
export declare const canisterId: string;
export interface backendInterface {
    addBill(name: string, amount: bigint, participants: Array<Principal>, image: ImageData | null): Promise<Bill>;
    addUser(id: Principal, username: string): Promise<User>;
    addUserSelf(username: string): Promise<void>;
    getAllBills(): Promise<Array<Bill>>;
    getAllUsers(): Promise<Array<User>>;
    getBillById(id: bigint): Promise<Bill>;
    getImageByBillId(id: bigint): Promise<ImageData>;
    getPact(): Promise<Pact>;
    initPact(name: string, currency: string, username: string): Promise<void>;
    removeBillById(id: bigint): Promise<void>;
    settle(): Promise<Pact>;
    summary(): Promise<Array<UserSummary>>;
}

