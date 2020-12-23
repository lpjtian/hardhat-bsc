/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SampleOnChainOracle } from "./SampleOnChainOracle";

export class SampleOnChainOracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    coordinator: string,
    providerPubKey: BigNumberish,
    providerTitle: BytesLike,
    overrides?: Overrides
  ): Promise<SampleOnChainOracle> {
    return super.deploy(
      coordinator,
      providerPubKey,
      providerTitle,
      overrides || {}
    ) as Promise<SampleOnChainOracle>;
  }
  getDeployTransaction(
    coordinator: string,
    providerPubKey: BigNumberish,
    providerTitle: BytesLike,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      coordinator,
      providerPubKey,
      providerTitle,
      overrides || {}
    );
  }
  attach(address: string): SampleOnChainOracle {
    return super.attach(address) as SampleOnChainOracle;
  }
  connect(signer: Signer): SampleOnChainOracleFactory {
    return super.connect(signer) as SampleOnChainOracleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleOnChainOracle {
    return new Contract(address, _abi, signerOrProvider) as SampleOnChainOracle;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "key",
        type: "bytes32",
      },
      {
        name: "value",
        type: "bytes",
      },
    ],
    name: "setProviderParameter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "specifier",
        type: "bytes32",
      },
      {
        name: "curve",
        type: "int256[]",
      },
    ],
    name: "initializeCurve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "userQuery",
        type: "string",
      },
      {
        name: "endpoint",
        type: "bytes32",
      },
      {
        name: "endpointParams",
        type: "bytes32[]",
      },
      {
        name: "onchainSubscriber",
        type: "bool",
      },
    ],
    name: "receive",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "endpoint",
        type: "bytes32",
      },
      {
        name: "endpointParams",
        type: "bytes32[]",
      },
    ],
    name: "setEndpointParams",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "coordinator",
        type: "address",
      },
      {
        name: "providerPubKey",
        type: "uint256",
      },
      {
        name: "providerTitle",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "query",
        type: "string",
      },
      {
        indexed: false,
        name: "endpoint",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "params",
        type: "bytes32[]",
      },
    ],
    name: "RecievedQuery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516060806113a48339810180604052810190808051906020019092919080519060200190929190805190602001909291905050506000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561018c57600080fd5b505af11580156101a0573d6000803e3d6000fd5b505050506040513d60208110156101b657600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663af87c83384846040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838152602001826000191660001916815260200192505050602060405180830381600087803b15801561024857600080fd5b505af115801561025c573d6000803e3d6000fd5b505050506040513d602081101561027257600080fd5b8101908080519060200190929190505050505050505061110d806102976000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635750644a1461007d5780638da5cb5b146100f4578063c92433571461014b578063de261583146101d7578063f2fde38b1461024e578063fcf0c24814610291575b600080fd5b34801561008957600080fd5b506100f26004803603810190808035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610305565b005b34801561010057600080fd5b506101096105bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015757600080fd5b506101bd6004803603810190808035600019169060200190929190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091929192905050506105e4565b604051808215151515815260200191505060405180910390f35b3480156101e357600080fd5b5061024c6004803603810190808035906020019092919080359060200190820180359060200191909192939192939080356000191690602001909291908035906020019082018035906020019190919293919293908035151590602001909291905050506109c4565b005b34801561025a57600080fd5b5061028f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf6565b005b34801561029d57600080fd5b50610303600480360381019080803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610e4b565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561042257600080fd5b505af1158015610436573d6000803e3d6000fd5b505050506040513d602081101561044c57600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635750644a83836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561055657808201518184015260208101905061053b565b50505050905090810190601f1680156105835780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156105a357600080fd5b505af11580156105b7573d6000803e3d6000fd5b505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561070457600080fd5b505af1158015610718573d6000803e3d6000fd5b505050506040513d602081101561072e57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663186b79c9306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156107dc57600080fd5b505af11580156107f0573d6000803e3d6000fd5b505050506040513d602081101561080657600080fd5b8101908080519060200190929190505050151561088b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f50726f7669646572206e6f7420696e746969616c697a6564000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663238b3aed858560006040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808460001916600019168152602001806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b8381101561095957808201518184015260208101905061093e565b50505050905001945050505050602060405180830381600087803b15801561098057600080fd5b505af1158015610994573d6000803e3d6000fd5b505050506040513d60208110156109aa57600080fd5b810190808051906020019092919050505091505092915050565b7fb1d30540f0019c1e94a292da7a6f164844c5d2e3dee75e0b3a6a66e4e9a4e15386868686866040518080602001856000191660001916815260200180602001838103835288888281815260200192508082843782019150508381038252858582818152602001925060200280828437820191505097505050505050505060405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f4449535041544348000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b158015610b0c57600080fd5b505af1158015610b20573d6000803e3d6000fd5b505050506040513d6020811015610b3657600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808015610be15750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15610ced57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636843581c886040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001806020018281038252600b8152602001807f48656c6c6f20576f726c6400000000000000000000000000000000000000000081525060200192505050602060405180830381600087803b158015610cb057600080fd5b505af1158015610cc4573d6000803e3d6000fd5b505050506040513d6020811015610cda57600080fd5b8101908080519060200190929190505050505b50505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d5157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610d8d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ea657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b158015610f6857600080fd5b505af1158015610f7c573d6000803e3d6000fd5b505050506040513d6020811015610f9257600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fcf0c24883836040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561109f578082015181840152602081019050611084565b505050509050019350505050600060405180830381600087803b1580156110c557600080fd5b505af11580156110d9573d6000803e3d6000fd5b5050505050505600a165627a7a72305820afb7443b0563304d1774d4dd21ec99e1b87a0d975b3b4b86ce3608b2d192d6d30029";
