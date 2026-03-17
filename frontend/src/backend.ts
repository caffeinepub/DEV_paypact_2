import { type HttpAgentOptions, type ActorConfig, type Agent, type ActorSubclass } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import { backend as _backend, createActor as _createActor, canisterId as _canisterId, CreateActorOptions } from "declarations/backend";
import { _SERVICE } from "declarations/backend/backend.did.d.js";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
function some<T>(value: T): Some<T> {
    return {
        __kind__: "Some",
        value: value
    };
}
function none(): None {
    return {
        __kind__: "None"
    };
}
function isNone<T>(option: Option<T>): option is None {
    return option.__kind__ === "None";
}
function isSome<T>(option: Option<T>): option is Some<T> {
    return option.__kind__ === "Some";
}
function unwrap<T>(option: Option<T>): T {
    if (isNone(option)) {
        throw new Error("unwrap: none");
    }
    return option.value;
}
function candid_some<T>(value: T): [T] {
    return [
        value
    ];
}
function candid_none<T>(): [] {
    return [];
}
function record_opt_to_undefined<T>(arg: T | null): T | undefined {
    return arg == null ? undefined : arg;
}
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
export function createActor(canisterId: string | Principal, options?: CreateActorOptions, processError?: (error: unknown) => never): backendInterface {
    const actor = _createActor(canisterId, options);
    return new Backend(actor, processError);
}
export const canisterId = _canisterId;
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
import type { ImageData as _ImageData } from "declarations/backend/backend.did.d.ts";
class Backend implements backendInterface {
    private actor: ActorSubclass<_SERVICE>;
    constructor(actor?: ActorSubclass<_SERVICE>, private processError?: (error: unknown) => never){
        this.actor = actor ?? _backend;
    }
    async addBill(arg0: string, arg1: bigint, arg2: Array<Principal>, arg3: ImageData | null): Promise<Bill> {
        if (this.processError) {
            try {
                const result = await this.actor.addBill(arg0, arg1, arg2, to_candid_opt_n1(arg3));
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.addBill(arg0, arg1, arg2, to_candid_opt_n1(arg3));
            return result;
        }
    }
    async addUser(arg0: Principal, arg1: string): Promise<User> {
        if (this.processError) {
            try {
                const result = await this.actor.addUser(arg0, arg1);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.addUser(arg0, arg1);
            return result;
        }
    }
    async addUserSelf(arg0: string): Promise<void> {
        if (this.processError) {
            try {
                const result = await this.actor.addUserSelf(arg0);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.addUserSelf(arg0);
            return result;
        }
    }
    async getAllBills(): Promise<Array<Bill>> {
        if (this.processError) {
            try {
                const result = await this.actor.getAllBills();
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.getAllBills();
            return result;
        }
    }
    async getAllUsers(): Promise<Array<User>> {
        if (this.processError) {
            try {
                const result = await this.actor.getAllUsers();
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.getAllUsers();
            return result;
        }
    }
    async getBillById(arg0: bigint): Promise<Bill> {
        if (this.processError) {
            try {
                const result = await this.actor.getBillById(arg0);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.getBillById(arg0);
            return result;
        }
    }
    async getImageByBillId(arg0: bigint): Promise<ImageData> {
        if (this.processError) {
            try {
                const result = await this.actor.getImageByBillId(arg0);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.getImageByBillId(arg0);
            return result;
        }
    }
    async getPact(): Promise<Pact> {
        if (this.processError) {
            try {
                const result = await this.actor.getPact();
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.getPact();
            return result;
        }
    }
    async initPact(arg0: string, arg1: string, arg2: string): Promise<void> {
        if (this.processError) {
            try {
                const result = await this.actor.initPact(arg0, arg1, arg2);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.initPact(arg0, arg1, arg2);
            return result;
        }
    }
    async removeBillById(arg0: bigint): Promise<void> {
        if (this.processError) {
            try {
                const result = await this.actor.removeBillById(arg0);
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.removeBillById(arg0);
            return result;
        }
    }
    async settle(): Promise<Pact> {
        if (this.processError) {
            try {
                const result = await this.actor.settle();
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.settle();
            return result;
        }
    }
    async summary(): Promise<Array<UserSummary>> {
        if (this.processError) {
            try {
                const result = await this.actor.summary();
                return result;
            } catch (e) {
                this.processError(e);
                throw new Error("unreachable");
            }
        } else {
            const result = await this.actor.summary();
            return result;
        }
    }
}
export const backend: backendInterface = new Backend();
function to_candid_opt_n1(value: ImageData | null): [] | [_ImageData] {
    return value === null ? candid_none() : candid_some(value);
}

