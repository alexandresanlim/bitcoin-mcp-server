import { IBlockResponse } from "../../../domain/models/responses/block/IBlockResponse.js";
import { IBlockRequestParameter } from "../../../shared/parameters/IBlockRequestParameter.js";

import { IApiClient } from "../../interfaces/IApiClient.js";

export class BlockRequestService {
  constructor(private client: IApiClient) {}

  async getBlock({
    hash,
  }: IBlockRequestParameter): Promise<IBlockResponse | null> {
    return this.client.makeRequest<IBlockResponse>(`block/${hash}`);
  }
}
