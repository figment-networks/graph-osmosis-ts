import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../google";
import { base } from "../../base";
import { VoteOption, WeightedVoteOption } from "./gov";

export class MsgSubmitProposal {
  static encode(message: MsgSubmitProposal, writer: Writer): void {
    const content_ = message.content;
    if (content_ !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Any.encode(content_, writer);
      writer.ldelim();
    }

    const initial_deposit_ = message.initial_deposit;
    for (let i = 0; i < initial_deposit_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      base.v1beta1.Coin.encode(initial_deposit_[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.proposer);
  }

  static decode(reader: Reader, length: i32): MsgSubmitProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.initial_deposit.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  content: google.protobuf.Any | null;
  initial_deposit: Array<base.v1beta1.Coin>;
  proposer: string;

  constructor(content: google.protobuf.Any | null = null, initial_deposit: Array<base.v1beta1.Coin> = [], proposer: string = "") {
    this.content = content;
    this.initial_deposit = initial_deposit;
    this.proposer = proposer;
  }
}

export function decodeMsgSubmitProposal(a: Uint8Array): MsgSubmitProposal {
  return Protobuf.decode<MsgSubmitProposal>(a, MsgSubmitProposal.decode);
}

@unmanaged
export class MsgSubmitProposalResponse {
  static encode(message: MsgSubmitProposalResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);
  }

  static decode(reader: Reader, length: i32): MsgSubmitProposalResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitProposalResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposal_id: u64;

  constructor(proposal_id: u64 = 0) {
    this.proposal_id = proposal_id;
  }
}

export function decodeMsgSubmitProposalResponse(a: Uint8Array): MsgSubmitProposalResponse {
  return Protobuf.decode<MsgSubmitProposalResponse>(a, MsgSubmitProposalResponse.decode);
}

export class MsgVote {
  static encode(message: MsgVote, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);

    writer.uint32(18);
    writer.string(message.voter);

    writer.uint32(24);
    writer.int32(message.option);
  }

  static decode(reader: Reader, length: i32): MsgVote {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVote();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposal_id: u64;
  voter: string;
  option: VoteOption;

  constructor(proposal_id: u64 = 0, voter: string = "", option: VoteOption = 0) {
    this.proposal_id = proposal_id;
    this.voter = voter;
    this.option = option;
  }
}

export function decodeMsgVote(a: Uint8Array): MsgVote {
  return Protobuf.decode<MsgVote>(a, MsgVote.decode);
}

@unmanaged
export class MsgVoteResponse {
  static encode(message: MsgVoteResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgVoteResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteResponse();

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

export function decodeMsgVoteResponse(a: Uint8Array): MsgVoteResponse {
  return Protobuf.decode<MsgVoteResponse>(a, MsgVoteResponse.decode);
}

export class MsgVoteWeighted {
  static encode(message: MsgVoteWeighted, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);

    writer.uint32(18);
    writer.string(message.voter);

    const options_ = message.options;
    for (let i = 0; i < options_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      WeightedVoteOption.encode(options_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgVoteWeighted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteWeighted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposal_id: u64;
  voter: string;
  options: Array<WeightedVoteOption>;

  constructor(proposal_id: u64 = 0, voter: string = "", options: Array<WeightedVoteOption> = []) {
    this.proposal_id = proposal_id;
    this.voter = voter;
    this.options = options;
  }
}

export function decodeMsgVoteWeighted(a: Uint8Array): MsgVoteWeighted {
  return Protobuf.decode<MsgVoteWeighted>(a, MsgVoteWeighted.decode);
}

@unmanaged
export class MsgVoteWeightedResponse {
  static encode(message: MsgVoteWeightedResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgVoteWeightedResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteWeightedResponse();

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

export function decodeMsgVoteWeightedResponse(a: Uint8Array): MsgVoteWeightedResponse {
  return Protobuf.decode<MsgVoteWeightedResponse>(a, MsgVoteWeightedResponse.decode);
}

export class MsgDeposit {
  static encode(message: MsgDeposit, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);

    writer.uint32(18);
    writer.string(message.depositor);

    const amount_ = message.amount;
    for (let i = 0; i < amount_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      base.v1beta1.Coin.encode(amount_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgDeposit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDeposit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposal_id: u64;
  depositor: string;
  amount: Array<base.v1beta1.Coin>;

  constructor(proposal_id: u64 = 0, depositor: string = "", amount: Array<base.v1beta1.Coin> = []) {
    this.proposal_id = proposal_id;
    this.depositor = depositor;
    this.amount = amount;
  }
}

export function decodeMsgDeposit(a: Uint8Array): MsgDeposit {
  return Protobuf.decode<MsgDeposit>(a, MsgDeposit.decode);
}

@unmanaged
export class MsgDepositResponse {
  static encode(message: MsgDepositResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgDepositResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDepositResponse();

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

export function decodeMsgDepositResponse(a: Uint8Array): MsgDepositResponse {
  return Protobuf.decode<MsgDepositResponse>(a, MsgDepositResponse.decode);
}
