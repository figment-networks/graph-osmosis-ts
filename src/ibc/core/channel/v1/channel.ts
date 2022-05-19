import { Writer, Reader, Protobuf } from "as-proto";
import { client } from "../../client";

export class Channel {
  static encode(message: Channel, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.state);

    writer.uint32(16);
    writer.int32(message.ordering);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(26);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    const connection_hops = message.connection_hops;
    if (connection_hops.length !== 0) {
      for (let i = 0; i < connection_hops.length; ++i) {
        writer.uint32(34);
        writer.string(connection_hops[i]);
      }
    }

    writer.uint32(42);
    writer.string(message.version);
  }

  static decode(reader: Reader, length: i32): Channel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Channel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connection_hops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  state: State;
  ordering: Order;
  counterparty: Counterparty | null;
  connection_hops: Array<string>;
  version: string;

  constructor(
    state: State = 0,
    ordering: Order = 0,
    counterparty: Counterparty | null = null,
    connection_hops: Array<string> = [],
    version: string = ""
  ) {
    this.state = state;
    this.ordering = ordering;
    this.counterparty = counterparty;
    this.connection_hops = connection_hops;
    this.version = version;
  }
}

export function decodeChannel(a: Uint8Array): Channel {
  return Protobuf.decode<Channel>(a, Channel.decode);
}

export class IdentifiedChannel {
  static encode(message: IdentifiedChannel, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.state);

    writer.uint32(16);
    writer.int32(message.ordering);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(26);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    const connection_hops = message.connection_hops;
    if (connection_hops.length !== 0) {
      for (let i = 0; i < connection_hops.length; ++i) {
        writer.uint32(34);
        writer.string(connection_hops[i]);
      }
    }

    writer.uint32(42);
    writer.string(message.version);

    writer.uint32(50);
    writer.string(message.port_id);

    writer.uint32(58);
    writer.string(message.channel_id);
  }

  static decode(reader: Reader, length: i32): IdentifiedChannel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedChannel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connection_hops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.port_id = reader.string();
          break;

        case 7:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  state: State;
  ordering: Order;
  counterparty: Counterparty | null;
  connection_hops: Array<string>;
  version: string;
  port_id: string;
  channel_id: string;

  constructor(
    state: State = 0,
    ordering: Order = 0,
    counterparty: Counterparty | null = null,
    connection_hops: Array<string> = [],
    version: string = "",
    port_id: string = "",
    channel_id: string = ""
  ) {
    this.state = state;
    this.ordering = ordering;
    this.counterparty = counterparty;
    this.connection_hops = connection_hops;
    this.version = version;
    this.port_id = port_id;
    this.channel_id = channel_id;
  }
}

export function decodeIdentifiedChannel(a: Uint8Array): IdentifiedChannel {
  return Protobuf.decode<IdentifiedChannel>(a, IdentifiedChannel.decode);
}

export class Counterparty {
  static encode(message: Counterparty, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);
  }

  static decode(reader: Reader, length: i32): Counterparty {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Counterparty();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;

  constructor(port_id: string = "", channel_id: string = "") {
    this.port_id = port_id;
    this.channel_id = channel_id;
  }
}

export function decodeCounterparty(a: Uint8Array): Counterparty {
  return Protobuf.decode<Counterparty>(a, Counterparty.decode);
}

export class Packet {
  static encode(message: Packet, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.sequence);

    writer.uint32(18);
    writer.string(message.source_port);

    writer.uint32(26);
    writer.string(message.source_channel);

    writer.uint32(34);
    writer.string(message.destination_port);

    writer.uint32(42);
    writer.string(message.destination_channel);

    writer.uint32(50);
    writer.bytes(message.data);

    const timeout_height = message.timeout_height;
    if (timeout_height !== null) {
      writer.uint32(58);
      writer.fork();
      client.v1.Height.encode(timeout_height, writer);
      writer.ldelim();
    }

    writer.uint32(64);
    writer.uint64(message.timeout_timestamp);
  }

  static decode(reader: Reader, length: i32): Packet {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Packet();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.source_port = reader.string();
          break;

        case 3:
          message.source_channel = reader.string();
          break;

        case 4:
          message.destination_port = reader.string();
          break;

        case 5:
          message.destination_channel = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        case 7:
          message.timeout_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.timeout_timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sequence: u64;
  source_port: string;
  source_channel: string;
  destination_port: string;
  destination_channel: string;
  data: Uint8Array;
  timeout_height: client.v1.Height | null;
  timeout_timestamp: u64;

  constructor(
    sequence: u64 = 0,
    source_port: string = "",
    source_channel: string = "",
    destination_port: string = "",
    destination_channel: string = "",
    data: Uint8Array = new Uint8Array(0),
    timeout_height: client.v1.Height | null = null,
    timeout_timestamp: u64 = 0
  ) {
    this.sequence = sequence;
    this.source_port = source_port;
    this.source_channel = source_channel;
    this.destination_port = destination_port;
    this.destination_channel = destination_channel;
    this.data = data;
    this.timeout_height = timeout_height;
    this.timeout_timestamp = timeout_timestamp;
  }
}

export function decodePacket(a: Uint8Array): Packet {
  return Protobuf.decode<Packet>(a, Packet.decode);
}

export class PacketState {
  static encode(message: PacketState, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);

    writer.uint32(24);
    writer.uint64(message.sequence);

    writer.uint32(34);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): PacketState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PacketState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;
  sequence: u64;
  data: Uint8Array;

  constructor(port_id: string = "", channel_id: string = "", sequence: u64 = 0, data: Uint8Array = new Uint8Array(0)) {
    this.port_id = port_id;
    this.channel_id = channel_id;
    this.sequence = sequence;
    this.data = data;
  }
}

export function decodePacketState(a: Uint8Array): PacketState {
  return Protobuf.decode<PacketState>(a, PacketState.decode);
}

export class Acknowledgement {
  static encode(message: Acknowledgement, writer: Writer): void {
    writer.uint32(170);
    writer.bytes(message.result);

    writer.uint32(178);
    writer.string(message.error);
  }

  static decode(reader: Reader, length: i32): Acknowledgement {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Acknowledgement();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;

        case 22:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: Uint8Array;
  error: string;

  constructor(result: Uint8Array = new Uint8Array(0), error: string = "") {
    this.result = result;
    this.error = error;
  }
}

export function decodeAcknowledgement(a: Uint8Array): Acknowledgement {
  return Protobuf.decode<Acknowledgement>(a, Acknowledgement.decode);
}

export enum State {
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
  STATE_CLOSED = 4,
}

export enum Order {
  ORDER_NONE_UNSPECIFIED = 0,
  ORDER_UNORDERED = 1,
  ORDER_ORDERED = 2,
}
