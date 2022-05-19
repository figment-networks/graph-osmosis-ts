import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../../google";
import { cosmos } from "../../../../cosmos";

export class IdentifiedClientState {
  static encode(message: IdentifiedClientState, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const client_state = message.client_state;
    if (client_state !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(client_state, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): IdentifiedClientState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedClientState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  client_state: google.protobuf.Any | null;

  constructor(client_id: string = "", client_state: google.protobuf.Any | null = null) {
    this.client_id = client_id;
    this.client_state = client_state;
  }
}

export function decodeIdentifiedClientState(a: Uint8Array): IdentifiedClientState {
  return Protobuf.decode<IdentifiedClientState>(a, IdentifiedClientState.decode);
}

export class ConsensusStateWithHeight {
  static encode(message: ConsensusStateWithHeight, writer: Writer): void {
    const height = message.height;
    if (height !== null) {
      writer.uint32(10);
      writer.fork();
      Height.encode(height, writer);
      writer.ldelim();
    }

    const consensus_state = message.consensus_state;
    if (consensus_state !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(consensus_state, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ConsensusStateWithHeight {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConsensusStateWithHeight();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensus_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  height: Height | null;
  consensus_state: google.protobuf.Any | null;

  constructor(height: Height | null = null, consensus_state: google.protobuf.Any | null = null) {
    this.height = height;
    this.consensus_state = consensus_state;
  }
}

export function decodeConsensusStateWithHeight(a: Uint8Array): ConsensusStateWithHeight {
  return Protobuf.decode<ConsensusStateWithHeight>(a, ConsensusStateWithHeight.decode);
}

export class ClientConsensusStates {
  static encode(message: ClientConsensusStates, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const consensus_states = message.consensus_states;
    for (let i = 0; i < consensus_states.length; ++i) {
      writer.uint32(18);
      writer.fork();
      ConsensusStateWithHeight.encode(consensus_states[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ClientConsensusStates {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientConsensusStates();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  consensus_states: Array<ConsensusStateWithHeight>;

  constructor(client_id: string = "", consensus_states: Array<ConsensusStateWithHeight> = []) {
    this.client_id = client_id;
    this.consensus_states = consensus_states;
  }
}

export function decodeClientConsensusStates(a: Uint8Array): ClientConsensusStates {
  return Protobuf.decode<ClientConsensusStates>(a, ClientConsensusStates.decode);
}

export class ClientUpdateProposal {
  static encode(message: ClientUpdateProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.subject_client_id);

    writer.uint32(34);
    writer.string(message.substitute_client_id);
  }

  static decode(reader: Reader, length: i32): ClientUpdateProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientUpdateProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.subject_client_id = reader.string();
          break;

        case 4:
          message.substitute_client_id = reader.string();
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
  subject_client_id: string;
  substitute_client_id: string;

  constructor(title: string = "", description: string = "", subject_client_id: string = "", substitute_client_id: string = "") {
    this.title = title;
    this.description = description;
    this.subject_client_id = subject_client_id;
    this.substitute_client_id = substitute_client_id;
  }
}

export function decodeClientUpdateProposal(a: Uint8Array): ClientUpdateProposal {
  return Protobuf.decode<ClientUpdateProposal>(a, ClientUpdateProposal.decode);
}

export class UpgradeProposal {
  static encode(message: UpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const plan = message.plan;
    if (plan !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.upgrade.v1beta1.Plan.encode(plan, writer);
      writer.ldelim();
    }

    const upgraded_client_state = message.upgraded_client_state;
    if (upgraded_client_state !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Any.encode(upgraded_client_state, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): UpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = cosmos.upgrade.v1beta1.Plan.decode(reader, reader.uint32());
          break;

        case 4:
          message.upgraded_client_state = google.protobuf.Any.decode(reader, reader.uint32());
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
  plan: cosmos.upgrade.v1beta1.Plan | null;
  upgraded_client_state: google.protobuf.Any | null;

  constructor(
    title: string = "",
    description: string = "",
    plan: cosmos.upgrade.v1beta1.Plan | null = null,
    upgraded_client_state: google.protobuf.Any | null = null
  ) {
    this.title = title;
    this.description = description;
    this.plan = plan;
    this.upgraded_client_state = upgraded_client_state;
  }
}

export function decodeUpgradeProposal(a: Uint8Array): UpgradeProposal {
  return Protobuf.decode<UpgradeProposal>(a, UpgradeProposal.decode);
}

@unmanaged
export class Height {
  static encode(message: Height, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.revision_number);

    writer.uint32(16);
    writer.uint64(message.revision_height);
  }

  static decode(reader: Reader, length: i32): Height {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Height();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revision_number = reader.uint64();
          break;

        case 2:
          message.revision_height = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  revision_number: u64;
  revision_height: u64;

  constructor(revision_number: u64 = 0, revision_height: u64 = 0) {
    this.revision_number = revision_number;
    this.revision_height = revision_height;
  }
}

export function decodeHeight(a: Uint8Array): Height {
  return Protobuf.decode<Height>(a, Height.decode);
}

export class Params {
  static encode(message: Params, writer: Writer): void {
    const allowed_clients = message.allowed_clients;
    if (allowed_clients.length !== 0) {
      for (let i = 0; i < allowed_clients.length; ++i) {
        writer.uint32(10);
        writer.string(allowed_clients[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowed_clients.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  allowed_clients: Array<string>;

  constructor(allowed_clients: Array<string> = []) {
    this.allowed_clients = allowed_clients;
  }
}

export function decodeParams(a: Uint8Array): Params {
  return Protobuf.decode<Params>(a, Params.decode);
}