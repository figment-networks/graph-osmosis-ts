// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmos/vesting/v1beta1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { base } from "../../base";

export class MsgCreateVestingAccount {
  static encode(message: MsgCreateVestingAccount, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.from_address);

    writer.uint32(18);
    writer.string(message.to_address);

    const amount_ = message.amount;
    for (let i = 0; i < amount_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      base.v1beta1.Coin.encode(amount_[i], writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.int64(message.end_time);

    writer.uint32(40);
    writer.bool(message.delayed);
  }

  static decode(reader: Reader, length: i32): MsgCreateVestingAccount {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateVestingAccount();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;

        case 2:
          message.to_address = reader.string();
          break;

        case 3:
          message.amount.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.end_time = reader.int64();
          break;

        case 5:
          message.delayed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  from_address: string;
  to_address: string;
  amount: Array<base.v1beta1.Coin>;
  end_time: i64;
  delayed: bool;

  constructor(
    from_address: string = "",
    to_address: string = "",
    amount: Array<base.v1beta1.Coin> = [],
    end_time: i64 = 0,
    delayed: bool = false
  ) {
    this.from_address = from_address;
    this.to_address = to_address;
    this.amount = amount;
    this.end_time = end_time;
    this.delayed = delayed;
  }
}

export function decodeMsgCreateVestingAccount(a: Uint8Array): MsgCreateVestingAccount {
  return Protobuf.decode<MsgCreateVestingAccount>(a, MsgCreateVestingAccount.decode);
}

@unmanaged
export class MsgCreateVestingAccountResponse {
  static encode(message: MsgCreateVestingAccountResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgCreateVestingAccountResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateVestingAccountResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgCreateVestingAccountResponse(a: Uint8Array): MsgCreateVestingAccountResponse {
  return Protobuf.decode<MsgCreateVestingAccountResponse>(a, MsgCreateVestingAccountResponse.decode);
}
