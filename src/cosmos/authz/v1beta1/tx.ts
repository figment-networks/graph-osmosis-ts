import { Writer, Reader, Protobuf } from "as-proto";
import { Grant } from "./authz";
import { google } from "../../../google";

export class MsgGrant {
  static encode(message: MsgGrant, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.granter);

    writer.uint32(18);
    writer.string(message.grantee);

    const grant = message.grant;
    if (grant !== null) {
      writer.uint32(26);
      writer.fork();
      Grant.encode(grant, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgGrant {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgGrant();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  granter: string;
  grantee: string;
  grant: Grant | null;

  constructor(granter: string = "", grantee: string = "", grant: Grant | null = null) {
    this.granter = granter;
    this.grantee = grantee;
    this.grant = grant;
  }
}

export function decodeMsgGrant(a: Uint8Array): MsgGrant {
  return Protobuf.decode<MsgGrant>(a, MsgGrant.decode);
}

export class MsgExecResponse {
  static encode(message: MsgExecResponse, writer: Writer): void {
    const results = message.results;
    if (results.length !== 0) {
      for (let i = 0; i < results.length; ++i) {
        writer.uint32(10);
        writer.bytes(results[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): MsgExecResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExecResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  results: Array<Uint8Array>;

  constructor(results: Array<Uint8Array> = []) {
    this.results = results;
  }
}

export function decodeMsgExecResponse(a: Uint8Array): MsgExecResponse {
  return Protobuf.decode<MsgExecResponse>(a, MsgExecResponse.decode);
}

export class MsgExec {
  static encode(message: MsgExec, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.grantee);

    const msgs = message.msgs;
    for (let i = 0; i < msgs.length; ++i) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(msgs[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgExec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.msgs.push(google.protobuf.Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  grantee: string;
  msgs: Array<google.protobuf.Any>;

  constructor(grantee: string = "", msgs: Array<google.protobuf.Any> = []) {
    this.grantee = grantee;
    this.msgs = msgs;
  }
}

export function decodeMsgExec(a: Uint8Array): MsgExec {
  return Protobuf.decode<MsgExec>(a, MsgExec.decode);
}

@unmanaged
export class MsgGrantResponse {
  static encode(message: MsgGrantResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgGrantResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgGrantResponse();

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

export function decodeMsgGrantResponse(a: Uint8Array): MsgGrantResponse {
  return Protobuf.decode<MsgGrantResponse>(a, MsgGrantResponse.decode);
}

export class MsgRevoke {
  static encode(message: MsgRevoke, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.granter);

    writer.uint32(18);
    writer.string(message.grantee);

    writer.uint32(26);
    writer.string(message.msg_type_url);
  }

  static decode(reader: Reader, length: i32): MsgRevoke {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRevoke();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.msg_type_url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  granter: string;
  grantee: string;
  msg_type_url: string;

  constructor(granter: string = "", grantee: string = "", msg_type_url: string = "") {
    this.granter = granter;
    this.grantee = grantee;
    this.msg_type_url = msg_type_url;
  }
}

export function decodeMsgRevoke(a: Uint8Array): MsgRevoke {
  return Protobuf.decode<MsgRevoke>(a, MsgRevoke.decode);
}

@unmanaged
export class MsgRevokeResponse {
  static encode(message: MsgRevokeResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgRevokeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRevokeResponse();

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

export function decodeMsgRevokeResponse(a: Uint8Array): MsgRevokeResponse {
  return Protobuf.decode<MsgRevokeResponse>(a, MsgRevokeResponse.decode);
}