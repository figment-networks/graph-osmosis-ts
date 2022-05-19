import { Writer, Reader, Protobuf } from "as-proto";

export class MsgVerifyInvariant {
  static encode(message: MsgVerifyInvariant, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.string(message.invariant_module_name);

    writer.uint32(26);
    writer.string(message.invariant_route);
  }

  static decode(reader: Reader, length: i32): MsgVerifyInvariant {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVerifyInvariant();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.invariant_module_name = reader.string();
          break;

        case 3:
          message.invariant_route = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  invariant_module_name: string;
  invariant_route: string;

  constructor(sender: string = "", invariant_module_name: string = "", invariant_route: string = "") {
    this.sender = sender;
    this.invariant_module_name = invariant_module_name;
    this.invariant_route = invariant_route;
  }
}

export function decodeMsgVerifyInvariant(a: Uint8Array): MsgVerifyInvariant {
  return Protobuf.decode<MsgVerifyInvariant>(a, MsgVerifyInvariant.decode);
}

@unmanaged
export class MsgVerifyInvariantResponse {
  static encode(message: MsgVerifyInvariantResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgVerifyInvariantResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVerifyInvariantResponse();

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

export function decodeMsgVerifyInvariantResponse(a: Uint8Array): MsgVerifyInvariantResponse {
  return Protobuf.decode<MsgVerifyInvariantResponse>(a, MsgVerifyInvariantResponse.decode);
}
