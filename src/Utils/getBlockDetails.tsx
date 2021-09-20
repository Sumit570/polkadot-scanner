import { WsProvider, ApiPromise } from "@polkadot/api";
import { timeStamp } from "console";

const getEventDetails = async (endPoint: string, blockNumber: number) => {
  const wsProvider = new WsProvider(endPoint);
  const api = await ApiPromise.create({ provider: wsProvider });
  const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
  const signedBlock = await api.rpc.chain.getBlock(blockHash);
  let data;
  signedBlock.block.extrinsics.forEach(
    (ex, index) => {
      const { method: { args, method, section } } = ex;
      const obj: any = {};
      obj.args = `${args}`;
      obj.method = `${method}`;
      obj.section = `${section}`;
      obj.blockNumber = blockNumber;
      data = obj;
    }
  );
  return data;
};

export default getEventDetails;
