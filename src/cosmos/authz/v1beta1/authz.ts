import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../google";

export class GenericAuthorization {
  static encode(message: GenericAuthorization, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.msg);
  }

  static decode(reader: Reader, length: i32): GenericAuthorization {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GenericAuthorization();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  msg: string;

  constructor(msg: string = "") {
    this.msg = msg;
  }
}

export function decodeGenericAuthorization(a: Uint8Array): GenericAuthorization {
  return Protobuf.decode<GenericAuthorization>(a, GenericAuthorization.decode);
}

export class Grant {
  static encode(message: Grant, writer: Writer): void {
    const authorization = message.authorization;
    if (authorization !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Any.encode(authorization, writer);
      writer.ldelim();
    }

    const expiration = message.expiration;
    if (expiration !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Timestamp.encode(expiration, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Grant {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Grant();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.expiration = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authorization: google.protobuf.Any | null;
  expiration: google.protobuf.Timestamp | null;

  constructor(authorization: google.protobuf.Any | null = null, expiration: google.protobuf.Timestamp | null = null) {
    this.authorization = authorization;
    this.expiration = expiration;
  }
}

export function decodeGrant(a: Uint8Array): Grant {
  return Protobuf.decode<Grant>(a, Grant.decode);
}