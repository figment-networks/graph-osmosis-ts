import { Writer, Reader, Protobuf } from "as-proto";

export class MsgUnjail {
  static encode(message: MsgUnjail, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.validator_addr);
  }

  static decode(reader: Reader, length: i32): MsgUnjail {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUnjail();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  validator_addr: string;

  constructor(validator_addr: string = "") {
    this.validator_addr = validator_addr;
  }
}

export function decodeMsgUnjail(a: Uint8Array): MsgUnjail {
  return Protobuf.decode<MsgUnjail>(a, MsgUnjail.decode);
}

@unmanaged
export class MsgUnjailResponse {
  static encode(message: MsgUnjailResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUnjailResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUnjailResponse();

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

export function decodeMsgUnjailResponse(a: Uint8Array): MsgUnjailResponse {
  return Protobuf.decode<MsgUnjailResponse>(a, MsgUnjailResponse.decode);
}