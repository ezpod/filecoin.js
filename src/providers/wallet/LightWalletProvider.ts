import { Message, SignedMessage, Signature } from "../Types";
import { HttpJsonRpcWalletProvider } from "./HttpJsonRpcWalletProvider";
import { MnemonicSigner } from "../../signers/MnemonicSigner";
import { StringGetter } from "../Types";
import { Connector } from "../../connectors/Connector";
import { Keystore } from "../../utils/keystore";
import { LightWalletSigner } from "../../signers/LightWalletSigner";

interface LighWalletOptions {
  encKeystore?: string;
  hdPathString?: string;
  seedPhrase?: string;
  password?: string;
}

export class LightWalletProvider extends HttpJsonRpcWalletProvider {

  public keystore!: Keystore;
  private hdPathString = "m/44'/1'/0/0/1";
  private signer!: LightWalletSigner;

  constructor(connector: Connector
  ) {
    super(connector);
  }

  public async createLightWallet(mnemonic: string, password: string) {
    this.keystore = new Keystore();
    await this.keystore.createVault({
      hdPathString: this.hdPathString,
      seedPhrase: mnemonic,
      password: password,
    });
    this.signer = new LightWalletSigner(this.keystore);
  }

  public async recoverLightWallet(mnemonic: string, password: string) {
    await this.createLightWallet(mnemonic, password);
  }

  public loadLightWallet(encryptedWallet: string) {
    this.keystore = new Keystore();
    this.keystore.deserialize(encryptedWallet);
    this.signer = new LightWalletSigner(this.keystore);
  }

  public async getAccounts(): Promise<string[]> {
    return [await this.getDefaultAccount()];
  }

  public async getDefaultAccount(): Promise<string> {
    return await this.signer.getDefaultAccount();
  }

  public async sendMessage(msg: Message): Promise<SignedMessage> {
    const signedMessage: SignedMessage = await this.signMessage(msg);
    //await this.sendSignedMessage(signedMessage);
    return signedMessage as SignedMessage;
  }

  public async signMessage(msg: Message): Promise<SignedMessage> {
    return await this.signer.sign(msg, 'test');
  }

  public async sign(data: string | ArrayBuffer): Promise<Signature> {
    return undefined as any;
  }

  public getSigner(): LightWalletSigner {
    return this.signer;
  }

  public async verify(address: string, data: string | ArrayBuffer, sign: Signature): Promise<boolean> {
    return undefined as any;
  }
}
