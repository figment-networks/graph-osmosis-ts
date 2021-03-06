// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmos/gov/v1beta1/gov.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { base } from "../../base";
import { google } from "../../../google";

export class WeightedVoteOption {
  static encode(message: WeightedVoteOption, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.option);

    writer.uint32(18);
    writer.string(message.weight);
  }

  static decode(reader: Reader, length: i32): WeightedVoteOption {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new WeightedVoteOption();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  option: VoteOption;
  weight: string;

  constructor(option: VoteOption = 0, weight: string = "") {
    this.option = option;
    this.weight = weight;
  }
}

export function decodeWeightedVoteOption(a: Uint8Array): WeightedVoteOption {
  return Protobuf.decode<WeightedVoteOption>(a, WeightedVoteOption.decode);
}

export class TextProposal {
  static encode(message: TextProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);
  }

  static decode(reader: Reader, length: i32): TextProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TextProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;

  constructor(title: string = "", description: string = "") {
    this.title = title;
    this.description = description;
  }
}

export function decodeTextProposal(a: Uint8Array): TextProposal {
  return Protobuf.decode<TextProposal>(a, TextProposal.decode);
}

export class Deposit {
  static encode(message: Deposit, writer: Writer): void {
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

  static decode(reader: Reader, length: i32): Deposit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Deposit();

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

export function decodeDeposit(a: Uint8Array): Deposit {
  return Protobuf.decode<Deposit>(a, Deposit.decode);
}

export class Proposal {
  static encode(message: Proposal, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);

    const content_ = message.content;
    if (content_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(content_, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int32(message.status);

    const final_tally_result_ = message.final_tally_result;
    if (final_tally_result_ !== null) {
      writer.uint32(34);
      writer.fork();
      TallyResult.encode(final_tally_result_, writer);
      writer.ldelim();
    }

    const submit_time_ = message.submit_time;
    if (submit_time_ !== null) {
      writer.uint32(42);
      writer.fork();
      google.protobuf.Timestamp.encode(submit_time_, writer);
      writer.ldelim();
    }

    const deposit_end_time_ = message.deposit_end_time;
    if (deposit_end_time_ !== null) {
      writer.uint32(50);
      writer.fork();
      google.protobuf.Timestamp.encode(deposit_end_time_, writer);
      writer.ldelim();
    }

    const total_deposit_ = message.total_deposit;
    for (let i = 0; i < total_deposit_.length; ++i) {
      writer.uint32(58);
      writer.fork();
      base.v1beta1.Coin.encode(total_deposit_[i], writer);
      writer.ldelim();
    }

    const voting_start_time_ = message.voting_start_time;
    if (voting_start_time_ !== null) {
      writer.uint32(66);
      writer.fork();
      google.protobuf.Timestamp.encode(voting_start_time_, writer);
      writer.ldelim();
    }

    const voting_end_time_ = message.voting_end_time;
    if (voting_end_time_ !== null) {
      writer.uint32(74);
      writer.fork();
      google.protobuf.Timestamp.encode(voting_end_time_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Proposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Proposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;

        case 2:
          message.content = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.status = reader.int32();
          break;

        case 4:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;

        case 5:
          message.submit_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.deposit_end_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.total_deposit.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.voting_start_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 9:
          message.voting_end_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposal_id: u64;
  content: google.protobuf.Any | null;
  status: ProposalStatus;
  final_tally_result: TallyResult | null;
  submit_time: google.protobuf.Timestamp | null;
  deposit_end_time: google.protobuf.Timestamp | null;
  total_deposit: Array<base.v1beta1.Coin>;
  voting_start_time: google.protobuf.Timestamp | null;
  voting_end_time: google.protobuf.Timestamp | null;

  constructor(
    proposal_id: u64 = 0,
    content: google.protobuf.Any | null = null,
    status: ProposalStatus = 0,
    final_tally_result: TallyResult | null = null,
    submit_time: google.protobuf.Timestamp | null = null,
    deposit_end_time: google.protobuf.Timestamp | null = null,
    total_deposit: Array<base.v1beta1.Coin> = [],
    voting_start_time: google.protobuf.Timestamp | null = null,
    voting_end_time: google.protobuf.Timestamp | null = null
  ) {
    this.proposal_id = proposal_id;
    this.content = content;
    this.status = status;
    this.final_tally_result = final_tally_result;
    this.submit_time = submit_time;
    this.deposit_end_time = deposit_end_time;
    this.total_deposit = total_deposit;
    this.voting_start_time = voting_start_time;
    this.voting_end_time = voting_end_time;
  }
}

export function decodeProposal(a: Uint8Array): Proposal {
  return Protobuf.decode<Proposal>(a, Proposal.decode);
}

export class TallyResult {
  static encode(message: TallyResult, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.yes);

    writer.uint32(18);
    writer.string(message.abstain);

    writer.uint32(26);
    writer.string(message.no);

    writer.uint32(34);
    writer.string(message.no_with_veto);
  }

  static decode(reader: Reader, length: i32): TallyResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TallyResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.string();
          break;

        case 2:
          message.abstain = reader.string();
          break;

        case 3:
          message.no = reader.string();
          break;

        case 4:
          message.no_with_veto = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;

  constructor(yes: string = "", abstain: string = "", no: string = "", no_with_veto: string = "") {
    this.yes = yes;
    this.abstain = abstain;
    this.no = no;
    this.no_with_veto = no_with_veto;
  }
}

export function decodeTallyResult(a: Uint8Array): TallyResult {
  return Protobuf.decode<TallyResult>(a, TallyResult.decode);
}

export class Vote {
  static encode(message: Vote, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposal_id);

    writer.uint32(18);
    writer.string(message.voter);

    writer.uint32(24);
    writer.int32(message.option);

    const options_ = message.options;
    for (let i = 0; i < options_.length; ++i) {
      writer.uint32(34);
      writer.fork();
      WeightedVoteOption.encode(options_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Vote {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Vote();

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

        case 4:
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
  option: VoteOption;
  options: Array<WeightedVoteOption>;

  constructor(proposal_id: u64 = 0, voter: string = "", option: VoteOption = 0, options: Array<WeightedVoteOption> = []) {
    this.proposal_id = proposal_id;
    this.voter = voter;
    this.option = option;
    this.options = options;
  }
}

export function decodeVote(a: Uint8Array): Vote {
  return Protobuf.decode<Vote>(a, Vote.decode);
}

export class DepositParams {
  static encode(message: DepositParams, writer: Writer): void {
    const min_deposit_ = message.min_deposit;
    for (let i = 0; i < min_deposit_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      base.v1beta1.Coin.encode(min_deposit_[i], writer);
      writer.ldelim();
    }

    const max_deposit_period_ = message.max_deposit_period;
    if (max_deposit_period_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Duration.encode(max_deposit_period_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DepositParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DepositParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.max_deposit_period = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  min_deposit: Array<base.v1beta1.Coin>;
  max_deposit_period: google.protobuf.Duration | null;

  constructor(min_deposit: Array<base.v1beta1.Coin> = [], max_deposit_period: google.protobuf.Duration | null = null) {
    this.min_deposit = min_deposit;
    this.max_deposit_period = max_deposit_period;
  }
}

export function decodeDepositParams(a: Uint8Array): DepositParams {
  return Protobuf.decode<DepositParams>(a, DepositParams.decode);
}

@unmanaged
export class VotingParams {
  static encode(message: VotingParams, writer: Writer): void {
    const voting_period_ = message.voting_period;
    if (voting_period_ !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Duration.encode(voting_period_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): VotingParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VotingParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  voting_period: google.protobuf.Duration | null;

  constructor(voting_period: google.protobuf.Duration | null = null) {
    this.voting_period = voting_period;
  }
}

export function decodeVotingParams(a: Uint8Array): VotingParams {
  return Protobuf.decode<VotingParams>(a, VotingParams.decode);
}

export class TallyParams {
  static encode(message: TallyParams, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.quorum);

    writer.uint32(18);
    writer.bytes(message.threshold);

    writer.uint32(26);
    writer.bytes(message.veto_threshold);
  }

  static decode(reader: Reader, length: i32): TallyParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TallyParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.bytes();
          break;

        case 2:
          message.threshold = reader.bytes();
          break;

        case 3:
          message.veto_threshold = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  quorum: Uint8Array;
  threshold: Uint8Array;
  veto_threshold: Uint8Array;

  constructor(
    quorum: Uint8Array = new Uint8Array(0),
    threshold: Uint8Array = new Uint8Array(0),
    veto_threshold: Uint8Array = new Uint8Array(0)
  ) {
    this.quorum = quorum;
    this.threshold = threshold;
    this.veto_threshold = veto_threshold;
  }
}

export function decodeTallyParams(a: Uint8Array): TallyParams {
  return Protobuf.decode<TallyParams>(a, TallyParams.decode);
}

export enum VoteOption {
  VOTE_OPTION_UNSPECIFIED = 0,
  VOTE_OPTION_YES = 1,
  VOTE_OPTION_ABSTAIN = 2,
  VOTE_OPTION_NO = 3,
  VOTE_OPTION_NO_WITH_VETO = 4,
}

export enum ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  PROPOSAL_STATUS_PASSED = 3,
  PROPOSAL_STATUS_REJECTED = 4,
  PROPOSAL_STATUS_FAILED = 5,
}
