/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenTest, TokenTestInterface } from "../../test/TokenTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200212a3803806200212a83398181016040528101906200003791906200033c565b83600190816200004891906200062d565b5082600290816200005a91906200062d565b5081600360006101000a81548160ff021916908360ff1602179055508060008190555033600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060005460046000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050505062000714565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000199826200014e565b810181811067ffffffffffffffff82111715620001bb57620001ba6200015f565b5b80604052505050565b6000620001d062000130565b9050620001de82826200018e565b919050565b600067ffffffffffffffff8211156200020157620002006200015f565b5b6200020c826200014e565b9050602081019050919050565b60005b83811015620002395780820151818401526020810190506200021c565b60008484015250505050565b60006200025c6200025684620001e3565b620001c4565b9050828152602081018484840111156200027b576200027a62000149565b5b6200028884828562000219565b509392505050565b600082601f830112620002a857620002a762000144565b5b8151620002ba84826020860162000245565b91505092915050565b600060ff82169050919050565b620002db81620002c3565b8114620002e757600080fd5b50565b600081519050620002fb81620002d0565b92915050565b6000819050919050565b620003168162000301565b81146200032257600080fd5b50565b60008151905062000336816200030b565b92915050565b600080600080608085870312156200035957620003586200013a565b5b600085015167ffffffffffffffff8111156200037a57620003796200013f565b5b620003888782880162000290565b945050602085015167ffffffffffffffff811115620003ac57620003ab6200013f565b5b620003ba8782880162000290565b9350506040620003cd87828801620002ea565b9250506060620003e08782880162000325565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043f57607f821691505b602082108103620004555762000454620003f7565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004bf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000480565b620004cb868362000480565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200050e62000508620005028462000301565b620004e3565b62000301565b9050919050565b6000819050919050565b6200052a83620004ed565b62000542620005398262000515565b8484546200048d565b825550505050565b600090565b620005596200054a565b620005668184846200051f565b505050565b5b818110156200058e57620005826000826200054f565b6001810190506200056c565b5050565b601f821115620005dd57620005a7816200045b565b620005b28462000470565b81016020851015620005c2578190505b620005da620005d18562000470565b8301826200056b565b50505b505050565b600082821c905092915050565b60006200060260001984600802620005e2565b1980831691505092915050565b60006200061d8383620005ef565b9150826002028217905092915050565b6200063882620003ec565b67ffffffffffffffff8111156200065457620006536200015f565b5b62000660825462000426565b6200066d82828562000592565b600060209050601f831160018114620006a5576000841562000690578287015190505b6200069c85826200060f565b8655506200070c565b601f198416620006b5866200045b565b60005b82811015620006df57848901518255600182019150602085019450602081019050620006b8565b86831015620006ff5784890151620006fb601f891682620005ef565b8355505b6001600288020188555050505b505050505050565b611a0680620007246000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461016857806370a082311461018457806395d89b41146101b45780639dc29fac146101d2578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c3919061121d565b60405180910390f35b6100e660048036038101906100e191906112d8565b6102e0565b6040516100f39190611333565b60405180910390f35b610104610446565b604051610111919061135d565b60405180910390f35b610134600480360381019061012f9190611378565b61044f565b6040516101419190611333565b60405180910390f35b61015261097b565b60405161015f91906113e7565b60405180910390f35b610182600480360381019061017d91906112d8565b610992565b005b61019e60048036038101906101999190611402565b610b9d565b6040516101ab919061135d565b60405180910390f35b6101bc610be6565b6040516101c9919061121d565b60405180910390f35b6101ec60048036038101906101e791906112d8565b610c78565b005b610208600480360381019061020391906112d8565b610e83565b6040516102159190611333565b60405180910390f35b6102386004803603810190610233919061142f565b611106565b604051610245919061135d565b60405180910390f35b60606001805461025d9061149e565b80601f01602080910402602001604051908101604052809291908181526020018280546102899061149e565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034790611541565b60405180910390fd5b600033905082600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051610433919061135d565b60405180910390a3600191505092915050565b60008054905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b6906115d3565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053890611665565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461058c91906116b4565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461061a91906116e8565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106ba919061135d565b60405180910390a3600033905082600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077d90611768565b60405180910390fd5b82600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461080e91906116b4565b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610967919061135d565b60405180910390a360019150509392505050565b6000600360009054906101000a900460ff16905090565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a19906117fa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a889061188c565b60405180910390fd5b80600054610a9f91906116e8565b60008190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610af091906116e8565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b91919061135d565b60405180910390a35050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060028054610bf59061149e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c219061149e565b8015610c6e5780601f10610c4357610100808354040283529160200191610c6e565b820191906000526020600020905b815481529060010190602001808311610c5157829003601f168201915b5050505050905090565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cff9061191e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6e906119b0565b60405180910390fd5b80600054610d8591906116b4565b60008190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610dd691906116b4565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e77919061135d565b60405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ef3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eea906115d3565b60405180910390fd5b600033905082600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610f7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7190611665565b60405180910390fd5b82600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fc591906116b4565b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461105391906116e8565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516110f3919061135d565b60405180910390a3600191505092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111c75780820151818401526020810190506111ac565b60008484015250505050565b6000601f19601f8301169050919050565b60006111ef8261118d565b6111f98185611198565b93506112098185602086016111a9565b611212816111d3565b840191505092915050565b6000602082019050818103600083015261123781846111e4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061126f82611244565b9050919050565b61127f81611264565b811461128a57600080fd5b50565b60008135905061129c81611276565b92915050565b6000819050919050565b6112b5816112a2565b81146112c057600080fd5b50565b6000813590506112d2816112ac565b92915050565b600080604083850312156112ef576112ee61123f565b5b60006112fd8582860161128d565b925050602061130e858286016112c3565b9150509250929050565b60008115159050919050565b61132d81611318565b82525050565b60006020820190506113486000830184611324565b92915050565b611357816112a2565b82525050565b6000602082019050611372600083018461134e565b92915050565b6000806000606084860312156113915761139061123f565b5b600061139f8682870161128d565b93505060206113b08682870161128d565b92505060406113c1868287016112c3565b9150509250925092565b600060ff82169050919050565b6113e1816113cb565b82525050565b60006020820190506113fc60008301846113d8565b92915050565b6000602082840312156114185761141761123f565b5b60006114268482850161128d565b91505092915050565b600080604083850312156114465761144561123f565b5b60006114548582860161128d565b92505060206114658582860161128d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114b657607f821691505b6020821081036114c9576114c861146f565b5b50919050565b7f617070726f766520746f20746865207a65726f2061646472657373206973206e60008201527f6f7420616c6c6f77656400000000000000000000000000000000000000000000602082015250565b600061152b602a83611198565b9150611536826114cf565b604082019050919050565b6000602082019050818103600083015261155a8161151e565b9050919050565b7f7472616e7366657220746f20746865207a65726f20616464726573732069732060008201527f6e6f7420616c6c6f776564000000000000000000000000000000000000000000602082015250565b60006115bd602b83611198565b91506115c882611561565b604082019050919050565b600060208201905081810360008301526115ec816115b0565b9050919050565b7f7472616e7366657220616d6f756e742063616e6e6f742065786365656420626160008201527f6c616e6365000000000000000000000000000000000000000000000000000000602082015250565b600061164f602583611198565b915061165a826115f3565b604082019050919050565b6000602082019050818103600083015261167e81611642565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116bf826112a2565b91506116ca836112a2565b92508282039050818111156116e2576116e1611685565b5b92915050565b60006116f3826112a2565b91506116fe836112a2565b925082820190508082111561171657611715611685565b5b92915050565b7f696e73756666696369656e7420616c6c6f77616e636500000000000000000000600082015250565b6000611752601683611198565b915061175d8261171c565b602082019050919050565b6000602082019050818103600083015261178181611745565b9050919050565b7f6f6e6c7920636f6e7472616374206f776e65722063616e2063616c6c206d696e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006117e4602183611198565b91506117ef82611788565b604082019050919050565b60006020820190508181036000830152611813816117d7565b9050919050565b7f6d696e7420746f20746865207a65726f2061646472657373206973206e6f742060008201527f616c6c6f77656400000000000000000000000000000000000000000000000000602082015250565b6000611876602783611198565b91506118818261181a565b604082019050919050565b600060208201905081810360008301526118a581611869565b9050919050565b7f6f6e6c7920636f6e7472616374206f776e65722063616e2063616c6c2062757260008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b6000611908602183611198565b9150611913826118ac565b604082019050919050565b60006020820190508181036000830152611937816118fb565b9050919050565b7f6275726e2066726f6d20746865207a65726f2061646472657373206973206e6f60008201527f7420616c6c6f7765640000000000000000000000000000000000000000000000602082015250565b600061199a602983611198565b91506119a58261193e565b604082019050919050565b600060208201905081810360008301526119c98161198d565b905091905056fea264697066735822122045f1eff31c8111df7ce6c50bb49b5182f9d59fcd57c52b215dbe90d57caf41f864736f6c63430008110033";

type TokenTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenTest__factory extends ContractFactory {
  constructor(...args: TokenTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    totalSupply_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenTest> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      totalSupply_,
      overrides || {}
    ) as Promise<TokenTest>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    totalSupply_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      totalSupply_,
      overrides || {}
    );
  }
  override attach(address: string): TokenTest {
    return super.attach(address) as TokenTest;
  }
  override connect(signer: Signer): TokenTest__factory {
    return super.connect(signer) as TokenTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenTestInterface {
    return new utils.Interface(_abi) as TokenTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenTest {
    return new Contract(address, _abi, signerOrProvider) as TokenTest;
  }
}