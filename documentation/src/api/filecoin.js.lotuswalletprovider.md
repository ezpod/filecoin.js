---
id: filecoin.js.lotuswalletprovider
title: LotusWalletProvider class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[filecoin.js](./filecoin.js.md) &gt; [LotusWalletProvider](./filecoin.js.lotuswalletprovider.md)

## LotusWalletProvider class

<b>Signature:</b>

```typescript
export declare class LotusWalletProvider extends BaseWalletProvider implements WalletProviderInterface, MultisigProviderInterface 
```
<b>Extends:</b> BaseWalletProvider

<b>Implements:</b> WalletProviderInterface, MultisigProviderInterface

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(client)](./filecoin.js.lotuswalletprovider._constructor_.md) |  | Constructs a new instance of the <code>LotusWalletProvider</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [deleteAddress(address)](./filecoin.js.lotuswalletprovider.deleteaddress.md) |  | delete address from lotus |
|  [exportPrivateKey(address)](./filecoin.js.lotuswalletprovider.exportprivatekey.md) |  | walletExport returns the private key of an address in the wallet. |
|  [getAddresses()](./filecoin.js.lotuswalletprovider.getaddresses.md) |  | get wallet list |
|  [getDefaultAddress()](./filecoin.js.lotuswalletprovider.getdefaultaddress.md) |  | get default address |
|  [hasAddress(address)](./filecoin.js.lotuswalletprovider.hasaddress.md) |  | check if address is in keystore |
|  [msigApproveAddSigner(address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigapproveaddsigner.md) |  | approves a previously proposed AddSigner message |
|  [msigApproveRemoveSigner(address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, addressToRemove, decreaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigapproveremovesigner.md) |  | approves a previously proposed RemoveSigner message |
|  [msigApproveSwapSigner(address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress)](./filecoin.js.lotuswalletprovider.msigapproveswapsigner.md) |  | approves a previously proposed SwapSigner |
|  [msigApproveTransfer(address, proposedTransactionId, signerAddress)](./filecoin.js.lotuswalletprovider.msigapprovetransfer.md) |  | approves a previously-proposed multisig message by transaction ID |
|  [msigApproveTransferTxHash(address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg)](./filecoin.js.lotuswalletprovider.msigapprovetransfertxhash.md) |  | approves a previously-proposed multisig message |
|  [msigCancelAddSigner(address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigcanceladdsigner.md) |  | cancels a previously proposed AddSigner message |
|  [msigCancelRemoveSigner(address, senderAddressOfCancelMsg, proposedMessageId, addressToRemove, decreaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigcancelremovesigner.md) |  | cancels a previously proposed RemoveSigner message |
|  [msigCancelSwapSigner(address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress)](./filecoin.js.lotuswalletprovider.msigcancelswapsigner.md) |  | cancels a previously proposed SwapSigner message |
|  [msigCancelTransfer(address, senderAddressOfCancelMsg, proposedMessageId, recipientAddres, value)](./filecoin.js.lotuswalletprovider.msigcanceltransfer.md) |  | cancels a previously-proposed multisig message |
|  [msigCreate(requiredNumberOfSenders, approvingAddresses, startEpoch, unlockDuration, initialBalance, senderAddressOfCreateMsg)](./filecoin.js.lotuswalletprovider.msigcreate.md) |  | creates a multisig wallet |
|  [msigProposeAddSigner(address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigproposeaddsigner.md) |  | proposes adding a signer in the multisig |
|  [msigProposeRemoveSigner(address, senderAddressOfProposeMsg, addressToRemove, decreaseNumberOfRequiredSigners)](./filecoin.js.lotuswalletprovider.msigproposeremovesigner.md) |  | proposes removing a signer from the multisig |
|  [msigProposeSwapSigner(address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress)](./filecoin.js.lotuswalletprovider.msigproposeswapsigner.md) |  | proposes swapping 2 signers in the multisig |
|  [msigProposeTransfer(address, recipientAddres, value, senderAddressOfProposeMsg)](./filecoin.js.lotuswalletprovider.msigproposetransfer.md) |  | proposes a multisig message |
|  [newAddress(type)](./filecoin.js.lotuswalletprovider.newaddress.md) |  | create new wallet |
|  [sendMessage(msg)](./filecoin.js.lotuswalletprovider.sendmessage.md) |  | send message, signed with default lotus wallet |
|  [setDefaultAddress(address)](./filecoin.js.lotuswalletprovider.setdefaultaddress.md) |  | set default address |
|  [sign(data)](./filecoin.js.lotuswalletprovider.sign.md) |  | sign raw message |
|  [signMessage(msg)](./filecoin.js.lotuswalletprovider.signmessage.md) |  | sign message |
|  [verify(address, data, sign)](./filecoin.js.lotuswalletprovider.verify.md) |  | verify message signature |
|  [walletImport(keyInfo)](./filecoin.js.lotuswalletprovider.walletimport.md) |  | walletImport returns the private key of an address in the wallet. |
