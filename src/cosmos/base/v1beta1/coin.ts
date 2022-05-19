import { Writer, Reader, Protobuf } from "as-proto";

export class Coin {
  static encode(message: Coin, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(18);
    writer.string(message.amount);
  }

  static decode(reader: Reader, length: i32): Coin {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Coin();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  amount: string;

  constructor(denom: string = "", amount: string = "") {
    this.denom = denom;
    this.amount = amount;
  }
}

export function decodeCoin(a: Uint8Array): Coin {
  return Protobuf.decode<Coin>(a, Coin.decode);
}

export class DecCoin {
  static encode(message: DecCoin, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(18);
    writer.string(message.amount);
  }

  static decode(reader: Reader, length: i32): DecCoin {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DecCoin();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  amount: string;

  constructor(denom: string = "", amount: string = "") {
    this.denom = denom;
    this.amount = amount;
  }
}

export function decodeDecCoin(a: Uint8Array): DecCoin {
  return Protobuf.decode<DecCoin>(a, DecCoin.decode);
}

export class IntProto {
  static encode(message: IntProto, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.int);
  }

  static decode(reader: Reader, length: i32): IntProto {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IntProto();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  int: string;

  constructor(int: string = "") {
    this.int = int;
  }
}

export function decodeIntProto(a: Uint8Array): IntProto {
  return Protobuf.decode<IntProto>(a, IntProto.decode);
}

export class DecProto {
  static encode(message: DecProto, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.dec);
  }

  static decode(reader: Reader, length: i32): DecProto {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DecProto();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  dec: string;

  constructor(dec: string = "") {
    this.dec = dec;
  }
}

export function decodeDecProto(a: Uint8Array): DecProto {
  return Protobuf.decode<DecProto>(a, DecProto.decode);
}
