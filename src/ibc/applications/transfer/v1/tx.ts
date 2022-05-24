import { Writer, Reader, Protobuf } from "as-proto";
import { cosmos } from "../../../../cosmos";
import { core } from "../../../core";

export class MsgTransfer {
  static encode(message: MsgTransfer, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.source_port);

    writer.uint32(18);
    writer.string(message.source_channel);

    const token_ = message.token;
    if (token_ !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(token_, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.sender);

    writer.uint32(42);
    writer.string(message.receiver);

    const timeout_height_ = message.timeout_height;
    if (timeout_height_ !== null) {
      writer.uint32(50);
      writer.fork();
      core.client.v1.Height.encode(timeout_height_, writer);
      writer.ldelim();
    }

    writer.uint32(56);
    writer.uint64(message.timeout_timestamp);
  }

  static decode(reader: Reader, length: i32): MsgTransfer {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTransfer();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source_port = reader.string();
          break;

        case 2:
          message.source_channel = reader.string();
          break;

        case 3:
          message.token = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.sender = reader.string();
          break;

        case 5:
          message.receiver = reader.string();
          break;

        case 6:
          message.timeout_height = core.client.v1.Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.timeout_timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  source_port: string;
  source_channel: string;
  token: cosmos.base.v1beta1.Coin | null;
  sender: string;
  receiver: string;
  timeout_height: core.client.v1.Height | null;
  timeout_timestamp: u64;

  constructor(
    source_port: string = "",
    source_channel: string = "",
    token: cosmos.base.v1beta1.Coin | null = null,
    sender: string = "",
    receiver: string = "",
    timeout_height: core.client.v1.Height | null = null,
    timeout_timestamp: u64 = 0
  ) {
    this.source_port = source_port;
    this.source_channel = source_channel;
    this.token = token;
    this.sender = sender;
    this.receiver = receiver;
    this.timeout_height = timeout_height;
    this.timeout_timestamp = timeout_timestamp;
  }
}

export function decodeMsgTransfer(a: Uint8Array): MsgTransfer {
  return Protobuf.decode<MsgTransfer>(a, MsgTransfer.decode);
}

@unmanaged
export class MsgTransferResponse {
  static encode(message: MsgTransferResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgTransferResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTransferResponse();

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

export function decodeMsgTransferResponse(a: Uint8Array): MsgTransferResponse {
  return Protobuf.decode<MsgTransferResponse>(a, MsgTransferResponse.decode);
}
