import { Writer, Reader, Protobuf } from "as-proto";
import { ics23 } from "../../../../confio";

export class MerkleRoot {
  static encode(message: MerkleRoot, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.hash);
  }

  static decode(reader: Reader, length: i32): MerkleRoot {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerkleRoot();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;

  constructor(hash: Uint8Array = new Uint8Array(0)) {
    this.hash = hash;
  }
}

export function decodeMerkleRoot(a: Uint8Array): MerkleRoot {
  return Protobuf.decode<MerkleRoot>(a, MerkleRoot.decode);
}

export class MerklePrefix {
  static encode(message: MerklePrefix, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key_prefix);
  }

  static decode(reader: Reader, length: i32): MerklePrefix {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerklePrefix();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key_prefix: Uint8Array;

  constructor(key_prefix: Uint8Array = new Uint8Array(0)) {
    this.key_prefix = key_prefix;
  }
}

export function decodeMerklePrefix(a: Uint8Array): MerklePrefix {
  return Protobuf.decode<MerklePrefix>(a, MerklePrefix.decode);
}

export class MerklePath {
  static encode(message: MerklePath, writer: Writer): void {
    const key_path_ = message.key_path;
    if (key_path_.length !== 0) {
      for (let i = 0; i < key_path_.length; ++i) {
        writer.uint32(10);
        writer.string(key_path_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): MerklePath {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerklePath();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_path.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key_path: Array<string>;

  constructor(key_path: Array<string> = []) {
    this.key_path = key_path;
  }
}

export function decodeMerklePath(a: Uint8Array): MerklePath {
  return Protobuf.decode<MerklePath>(a, MerklePath.decode);
}

export class MerkleProof {
  static encode(message: MerkleProof, writer: Writer): void {
    const proofs_ = message.proofs;
    for (let i = 0; i < proofs_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      ics23.CommitmentProof.encode(proofs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MerkleProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerkleProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(ics23.CommitmentProof.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proofs: Array<ics23.CommitmentProof>;

  constructor(proofs: Array<ics23.CommitmentProof> = []) {
    this.proofs = proofs;
  }
}

export function decodeMerkleProof(a: Uint8Array): MerkleProof {
  return Protobuf.decode<MerkleProof>(a, MerkleProof.decode);
}
