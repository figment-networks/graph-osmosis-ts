import { Writer, Reader, Protobuf } from "as-proto";

export class AppDescriptor {
  static encode(message: AppDescriptor, writer: Writer): void {
    const authn_ = message.authn;
    if (authn_ !== null) {
      writer.uint32(10);
      writer.fork();
      AuthnDescriptor.encode(authn_, writer);
      writer.ldelim();
    }

    const chain_ = message.chain;
    if (chain_ !== null) {
      writer.uint32(18);
      writer.fork();
      ChainDescriptor.encode(chain_, writer);
      writer.ldelim();
    }

    const codec_ = message.codec;
    if (codec_ !== null) {
      writer.uint32(26);
      writer.fork();
      CodecDescriptor.encode(codec_, writer);
      writer.ldelim();
    }

    const configuration_ = message.configuration;
    if (configuration_ !== null) {
      writer.uint32(34);
      writer.fork();
      ConfigurationDescriptor.encode(configuration_, writer);
      writer.ldelim();
    }

    const query_services_ = message.query_services;
    if (query_services_ !== null) {
      writer.uint32(42);
      writer.fork();
      QueryServicesDescriptor.encode(query_services_, writer);
      writer.ldelim();
    }

    const tx_ = message.tx;
    if (tx_ !== null) {
      writer.uint32(50);
      writer.fork();
      TxDescriptor.encode(tx_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AppDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AppDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;

        case 5:
          message.query_services = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;

        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authn: AuthnDescriptor | null;
  chain: ChainDescriptor | null;
  codec: CodecDescriptor | null;
  configuration: ConfigurationDescriptor | null;
  query_services: QueryServicesDescriptor | null;
  tx: TxDescriptor | null;

  constructor(
    authn: AuthnDescriptor | null = null,
    chain: ChainDescriptor | null = null,
    codec: CodecDescriptor | null = null,
    configuration: ConfigurationDescriptor | null = null,
    query_services: QueryServicesDescriptor | null = null,
    tx: TxDescriptor | null = null
  ) {
    this.authn = authn;
    this.chain = chain;
    this.codec = codec;
    this.configuration = configuration;
    this.query_services = query_services;
    this.tx = tx;
  }
}

export function decodeAppDescriptor(a: Uint8Array): AppDescriptor {
  return Protobuf.decode<AppDescriptor>(a, AppDescriptor.decode);
}

export class TxDescriptor {
  static encode(message: TxDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fullname);

    const msgs_ = message.msgs;
    for (let i = 0; i < msgs_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      MsgDescriptor.encode(msgs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TxDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TxDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fullname: string;
  msgs: Array<MsgDescriptor>;

  constructor(fullname: string = "", msgs: Array<MsgDescriptor> = []) {
    this.fullname = fullname;
    this.msgs = msgs;
  }
}

export function decodeTxDescriptor(a: Uint8Array): TxDescriptor {
  return Protobuf.decode<TxDescriptor>(a, TxDescriptor.decode);
}

export class AuthnDescriptor {
  static encode(message: AuthnDescriptor, writer: Writer): void {
    const sign_modes_ = message.sign_modes;
    for (let i = 0; i < sign_modes_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      SigningModeDescriptor.encode(sign_modes_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AuthnDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AuthnDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sign_modes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sign_modes: Array<SigningModeDescriptor>;

  constructor(sign_modes: Array<SigningModeDescriptor> = []) {
    this.sign_modes = sign_modes;
  }
}

export function decodeAuthnDescriptor(a: Uint8Array): AuthnDescriptor {
  return Protobuf.decode<AuthnDescriptor>(a, AuthnDescriptor.decode);
}

export class SigningModeDescriptor {
  static encode(message: SigningModeDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(16);
    writer.int32(message.number);

    writer.uint32(26);
    writer.string(message.authn_info_provider_method_fullname);
  }

  static decode(reader: Reader, length: i32): SigningModeDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SigningModeDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.number = reader.int32();
          break;

        case 3:
          message.authn_info_provider_method_fullname = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  number: i32;
  authn_info_provider_method_fullname: string;

  constructor(name: string = "", number: i32 = 0, authn_info_provider_method_fullname: string = "") {
    this.name = name;
    this.number = number;
    this.authn_info_provider_method_fullname = authn_info_provider_method_fullname;
  }
}

export function decodeSigningModeDescriptor(a: Uint8Array): SigningModeDescriptor {
  return Protobuf.decode<SigningModeDescriptor>(a, SigningModeDescriptor.decode);
}

export class ChainDescriptor {
  static encode(message: ChainDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);
  }

  static decode(reader: Reader, length: i32): ChainDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ChainDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;

  constructor(id: string = "") {
    this.id = id;
  }
}

export function decodeChainDescriptor(a: Uint8Array): ChainDescriptor {
  return Protobuf.decode<ChainDescriptor>(a, ChainDescriptor.decode);
}

export class CodecDescriptor {
  static encode(message: CodecDescriptor, writer: Writer): void {
    const interfaces_ = message.interfaces;
    for (let i = 0; i < interfaces_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      InterfaceDescriptor.encode(interfaces_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CodecDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CodecDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  interfaces: Array<InterfaceDescriptor>;

  constructor(interfaces: Array<InterfaceDescriptor> = []) {
    this.interfaces = interfaces;
  }
}

export function decodeCodecDescriptor(a: Uint8Array): CodecDescriptor {
  return Protobuf.decode<CodecDescriptor>(a, CodecDescriptor.decode);
}

export class InterfaceDescriptor {
  static encode(message: InterfaceDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fullname);

    const interface_accepting_messages_ = message.interface_accepting_messages;
    for (let i = 0; i < interface_accepting_messages_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      InterfaceAcceptingMessageDescriptor.encode(interface_accepting_messages_[i], writer);
      writer.ldelim();
    }

    const interface_implementers_ = message.interface_implementers;
    for (let i = 0; i < interface_implementers_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      InterfaceImplementerDescriptor.encode(interface_implementers_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): InterfaceDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InterfaceDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.interface_accepting_messages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.interface_implementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fullname: string;
  interface_accepting_messages: Array<InterfaceAcceptingMessageDescriptor>;
  interface_implementers: Array<InterfaceImplementerDescriptor>;

  constructor(
    fullname: string = "",
    interface_accepting_messages: Array<InterfaceAcceptingMessageDescriptor> = [],
    interface_implementers: Array<InterfaceImplementerDescriptor> = []
  ) {
    this.fullname = fullname;
    this.interface_accepting_messages = interface_accepting_messages;
    this.interface_implementers = interface_implementers;
  }
}

export function decodeInterfaceDescriptor(a: Uint8Array): InterfaceDescriptor {
  return Protobuf.decode<InterfaceDescriptor>(a, InterfaceDescriptor.decode);
}

export class InterfaceImplementerDescriptor {
  static encode(message: InterfaceImplementerDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fullname);

    writer.uint32(18);
    writer.string(message.type_url);
  }

  static decode(reader: Reader, length: i32): InterfaceImplementerDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InterfaceImplementerDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.type_url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fullname: string;
  type_url: string;

  constructor(fullname: string = "", type_url: string = "") {
    this.fullname = fullname;
    this.type_url = type_url;
  }
}

export function decodeInterfaceImplementerDescriptor(a: Uint8Array): InterfaceImplementerDescriptor {
  return Protobuf.decode<InterfaceImplementerDescriptor>(a, InterfaceImplementerDescriptor.decode);
}

export class InterfaceAcceptingMessageDescriptor {
  static encode(message: InterfaceAcceptingMessageDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fullname);

    const field_descriptor_names_ = message.field_descriptor_names;
    if (field_descriptor_names_.length !== 0) {
      for (let i = 0; i < field_descriptor_names_.length; ++i) {
        writer.uint32(18);
        writer.string(field_descriptor_names_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): InterfaceAcceptingMessageDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InterfaceAcceptingMessageDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.field_descriptor_names.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fullname: string;
  field_descriptor_names: Array<string>;

  constructor(fullname: string = "", field_descriptor_names: Array<string> = []) {
    this.fullname = fullname;
    this.field_descriptor_names = field_descriptor_names;
  }
}

export function decodeInterfaceAcceptingMessageDescriptor(a: Uint8Array): InterfaceAcceptingMessageDescriptor {
  return Protobuf.decode<InterfaceAcceptingMessageDescriptor>(a, InterfaceAcceptingMessageDescriptor.decode);
}

export class ConfigurationDescriptor {
  static encode(message: ConfigurationDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.bech32_account_address_prefix);
  }

  static decode(reader: Reader, length: i32): ConfigurationDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConfigurationDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32_account_address_prefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bech32_account_address_prefix: string;

  constructor(bech32_account_address_prefix: string = "") {
    this.bech32_account_address_prefix = bech32_account_address_prefix;
  }
}

export function decodeConfigurationDescriptor(a: Uint8Array): ConfigurationDescriptor {
  return Protobuf.decode<ConfigurationDescriptor>(a, ConfigurationDescriptor.decode);
}

export class MsgDescriptor {
  static encode(message: MsgDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.msg_type_url);
  }

  static decode(reader: Reader, length: i32): MsgDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_type_url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  msg_type_url: string;

  constructor(msg_type_url: string = "") {
    this.msg_type_url = msg_type_url;
  }
}

export function decodeMsgDescriptor(a: Uint8Array): MsgDescriptor {
  return Protobuf.decode<MsgDescriptor>(a, MsgDescriptor.decode);
}

@unmanaged
export class GetAuthnDescriptorRequest {
  static encode(message: GetAuthnDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetAuthnDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetAuthnDescriptorRequest();

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

export function decodeGetAuthnDescriptorRequest(a: Uint8Array): GetAuthnDescriptorRequest {
  return Protobuf.decode<GetAuthnDescriptorRequest>(a, GetAuthnDescriptorRequest.decode);
}

export class GetAuthnDescriptorResponse {
  static encode(message: GetAuthnDescriptorResponse, writer: Writer): void {
    const authn_ = message.authn;
    if (authn_ !== null) {
      writer.uint32(10);
      writer.fork();
      AuthnDescriptor.encode(authn_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetAuthnDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetAuthnDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authn: AuthnDescriptor | null;

  constructor(authn: AuthnDescriptor | null = null) {
    this.authn = authn;
  }
}

export function decodeGetAuthnDescriptorResponse(a: Uint8Array): GetAuthnDescriptorResponse {
  return Protobuf.decode<GetAuthnDescriptorResponse>(a, GetAuthnDescriptorResponse.decode);
}

@unmanaged
export class GetChainDescriptorRequest {
  static encode(message: GetChainDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetChainDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetChainDescriptorRequest();

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

export function decodeGetChainDescriptorRequest(a: Uint8Array): GetChainDescriptorRequest {
  return Protobuf.decode<GetChainDescriptorRequest>(a, GetChainDescriptorRequest.decode);
}

export class GetChainDescriptorResponse {
  static encode(message: GetChainDescriptorResponse, writer: Writer): void {
    const chain_ = message.chain;
    if (chain_ !== null) {
      writer.uint32(10);
      writer.fork();
      ChainDescriptor.encode(chain_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetChainDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetChainDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  chain: ChainDescriptor | null;

  constructor(chain: ChainDescriptor | null = null) {
    this.chain = chain;
  }
}

export function decodeGetChainDescriptorResponse(a: Uint8Array): GetChainDescriptorResponse {
  return Protobuf.decode<GetChainDescriptorResponse>(a, GetChainDescriptorResponse.decode);
}

@unmanaged
export class GetCodecDescriptorRequest {
  static encode(message: GetCodecDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetCodecDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCodecDescriptorRequest();

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

export function decodeGetCodecDescriptorRequest(a: Uint8Array): GetCodecDescriptorRequest {
  return Protobuf.decode<GetCodecDescriptorRequest>(a, GetCodecDescriptorRequest.decode);
}

export class GetCodecDescriptorResponse {
  static encode(message: GetCodecDescriptorResponse, writer: Writer): void {
    const codec_ = message.codec;
    if (codec_ !== null) {
      writer.uint32(10);
      writer.fork();
      CodecDescriptor.encode(codec_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetCodecDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCodecDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  codec: CodecDescriptor | null;

  constructor(codec: CodecDescriptor | null = null) {
    this.codec = codec;
  }
}

export function decodeGetCodecDescriptorResponse(a: Uint8Array): GetCodecDescriptorResponse {
  return Protobuf.decode<GetCodecDescriptorResponse>(a, GetCodecDescriptorResponse.decode);
}

@unmanaged
export class GetConfigurationDescriptorRequest {
  static encode(message: GetConfigurationDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetConfigurationDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetConfigurationDescriptorRequest();

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

export function decodeGetConfigurationDescriptorRequest(a: Uint8Array): GetConfigurationDescriptorRequest {
  return Protobuf.decode<GetConfigurationDescriptorRequest>(a, GetConfigurationDescriptorRequest.decode);
}

export class GetConfigurationDescriptorResponse {
  static encode(message: GetConfigurationDescriptorResponse, writer: Writer): void {
    const config_ = message.config;
    if (config_ !== null) {
      writer.uint32(10);
      writer.fork();
      ConfigurationDescriptor.encode(config_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetConfigurationDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetConfigurationDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  config: ConfigurationDescriptor | null;

  constructor(config: ConfigurationDescriptor | null = null) {
    this.config = config;
  }
}

export function decodeGetConfigurationDescriptorResponse(a: Uint8Array): GetConfigurationDescriptorResponse {
  return Protobuf.decode<GetConfigurationDescriptorResponse>(a, GetConfigurationDescriptorResponse.decode);
}

@unmanaged
export class GetQueryServicesDescriptorRequest {
  static encode(message: GetQueryServicesDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetQueryServicesDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetQueryServicesDescriptorRequest();

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

export function decodeGetQueryServicesDescriptorRequest(a: Uint8Array): GetQueryServicesDescriptorRequest {
  return Protobuf.decode<GetQueryServicesDescriptorRequest>(a, GetQueryServicesDescriptorRequest.decode);
}

export class GetQueryServicesDescriptorResponse {
  static encode(message: GetQueryServicesDescriptorResponse, writer: Writer): void {
    const queries_ = message.queries;
    if (queries_ !== null) {
      writer.uint32(10);
      writer.fork();
      QueryServicesDescriptor.encode(queries_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetQueryServicesDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetQueryServicesDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  queries: QueryServicesDescriptor | null;

  constructor(queries: QueryServicesDescriptor | null = null) {
    this.queries = queries;
  }
}

export function decodeGetQueryServicesDescriptorResponse(a: Uint8Array): GetQueryServicesDescriptorResponse {
  return Protobuf.decode<GetQueryServicesDescriptorResponse>(a, GetQueryServicesDescriptorResponse.decode);
}

@unmanaged
export class GetTxDescriptorRequest {
  static encode(message: GetTxDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetTxDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetTxDescriptorRequest();

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

export function decodeGetTxDescriptorRequest(a: Uint8Array): GetTxDescriptorRequest {
  return Protobuf.decode<GetTxDescriptorRequest>(a, GetTxDescriptorRequest.decode);
}

export class GetTxDescriptorResponse {
  static encode(message: GetTxDescriptorResponse, writer: Writer): void {
    const tx_ = message.tx;
    if (tx_ !== null) {
      writer.uint32(10);
      writer.fork();
      TxDescriptor.encode(tx_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetTxDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetTxDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  tx: TxDescriptor | null;

  constructor(tx: TxDescriptor | null = null) {
    this.tx = tx;
  }
}

export function decodeGetTxDescriptorResponse(a: Uint8Array): GetTxDescriptorResponse {
  return Protobuf.decode<GetTxDescriptorResponse>(a, GetTxDescriptorResponse.decode);
}

export class QueryServicesDescriptor {
  static encode(message: QueryServicesDescriptor, writer: Writer): void {
    const query_services_ = message.query_services;
    for (let i = 0; i < query_services_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      QueryServiceDescriptor.encode(query_services_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryServicesDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryServicesDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query_services.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  query_services: Array<QueryServiceDescriptor>;

  constructor(query_services: Array<QueryServiceDescriptor> = []) {
    this.query_services = query_services;
  }
}

export function decodeQueryServicesDescriptor(a: Uint8Array): QueryServicesDescriptor {
  return Protobuf.decode<QueryServicesDescriptor>(a, QueryServicesDescriptor.decode);
}

export class QueryServiceDescriptor {
  static encode(message: QueryServiceDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fullname);

    writer.uint32(16);
    writer.bool(message.is_module);

    const methods_ = message.methods;
    for (let i = 0; i < methods_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      QueryMethodDescriptor.encode(methods_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryServiceDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryServiceDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.is_module = reader.bool();
          break;

        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fullname: string;
  is_module: bool;
  methods: Array<QueryMethodDescriptor>;

  constructor(fullname: string = "", is_module: bool = false, methods: Array<QueryMethodDescriptor> = []) {
    this.fullname = fullname;
    this.is_module = is_module;
    this.methods = methods;
  }
}

export function decodeQueryServiceDescriptor(a: Uint8Array): QueryServiceDescriptor {
  return Protobuf.decode<QueryServiceDescriptor>(a, QueryServiceDescriptor.decode);
}

export class QueryMethodDescriptor {
  static encode(message: QueryMethodDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(18);
    writer.string(message.full_query_path);
  }

  static decode(reader: Reader, length: i32): QueryMethodDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryMethodDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.full_query_path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  full_query_path: string;

  constructor(name: string = "", full_query_path: string = "") {
    this.name = name;
    this.full_query_path = full_query_path;
  }
}

export function decodeQueryMethodDescriptor(a: Uint8Array): QueryMethodDescriptor {
  return Protobuf.decode<QueryMethodDescriptor>(a, QueryMethodDescriptor.decode);
}
