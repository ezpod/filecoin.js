---
id: filecoin.js.lotuswalletprovider.msigcancelremovesigner
title: LotusWalletProvider.msigCancelRemoveSigner() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[filecoin.js](./filecoin.js.md) &gt; [LotusWalletProvider](./filecoin.js.lotuswalletprovider.md) &gt; [msigCancelRemoveSigner](./filecoin.js.lotuswalletprovider.msigcancelremovesigner.md)

## LotusWalletProvider.msigCancelRemoveSigner() method

cancels a previously proposed RemoveSigner message

<b>Signature:</b>

```typescript
msigCancelRemoveSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string |  |
|  senderAddressOfCancelMsg | string |  |
|  proposedMessageId | number |  |
|  addressToRemove | string |  |
|  decreaseNumberOfRequiredSigners | boolean |  |

<b>Returns:</b>

Promise&lt;Cid&gt;
