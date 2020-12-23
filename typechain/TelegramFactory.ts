/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Telegram } from "./Telegram";

export class TelegramFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(registryAddress: string, overrides?: Overrides): Promise<Telegram> {
    return super.deploy(registryAddress, overrides || {}) as Promise<Telegram>;
  }
  getDeployTransaction(
    registryAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(registryAddress, overrides || {});
  }
  attach(address: string): Telegram {
    return super.attach(address) as Telegram;
  }
  connect(signer: Signer): TelegramFactory {
    return super.connect(signer) as TelegramFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Telegram {
    return new Contract(address, _abi, signerOrProvider) as Telegram;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "spec1",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "bytes32[]",
      },
      {
        name: "",
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
    inputs: [
      {
        name: "registryAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040527f6c6f6f6d64617274000000000000000000000000000000000000000000000000600090600019169055670de0b6b3a7640000600155606060405190810160405280600167ffffffffffffffff1681526020016702c68af0bb14000067ffffffffffffffff168152602001633b9aca0067ffffffffffffffff168152506002906003610091929190610425565b5034801561009e57600080fd5b506040516020806105e8833981018060405281019080805190602001909291905050506000606082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f54656c656772616d20526567697374726174696f6e0000000000000000000000915060026040519080825280602002602001820160405280156101595781602001602082028038833980820191505090505b5090507f703100000000000000000000000000000000000000000000000000000000000081600081518110151561018c57fe5b9060200190602002019060001916908160001916815250507f70320000000000000000000000000000000000000000000000000000000000008160018151811015156101d457fe5b906020019060200201906000191690816000191681525050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663af87c833607b846040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180838152602001826000191660001916815260200192505050602060405180830381600087803b15801561028e57600080fd5b505af11580156102a2573d6000803e3d6000fd5b505050506040513d60208110156102b857600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663238b3aed600054600260006040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808460001916600019168152602001806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182810382528481815481526020019150805480156103bf57602002820191906000526020600020905b8154815260200190600101908083116103ab575b5050945050505050602060405180830381600087803b1580156103e157600080fd5b505af11580156103f5573d6000803e3d6000fd5b505050506040513d602081101561040b57600080fd5b8101908080519060200190929190505050505050506104a3565b82805482825590600052602060002090810192821561046d579160200282015b8281111561046c578251829067ffffffffffffffff16905591602001919060010190610445565b5b50905061047a919061047e565b5090565b6104a091905b8082111561049c576000816000905550600101610484565b5090565b90565b610136806104b26000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806348cf129a14610051578063de26158314610084575b600080fd5b34801561005d57600080fd5b506100666100fb565b60405180826000191660001916815260200191505060405180910390f35b34801561009057600080fd5b506100f9600480360381019080803590602001909291908035906020019082018035906020019190919293919293908035600019169060200190929190803590602001908201803590602001919091929391929390803515159060200190929190505050610101565b005b60005481565b505050505050505600a165627a7a72305820122b40a55be2ccc08265e2be280d8de03a751b3c117e0c404906dee5a9e0c1a90029";
