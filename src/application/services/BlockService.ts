import { IBlockResponse } from "../../domain/models/responses/block/IBlockResponse.js";
import { IFeesRecommendedResponse } from "../../domain/models/responses/fees/IFeesRecommendedResponse.js";
import { BlockRequestService } from "../../infrastructure/services/requests/BlockRequestService.js";
import { IBlockRequestParameter } from "../../shared/parameters/IBlockRequestParameter.js";

import { formatResponse } from "../helpers/format.js";

export class BlockService {
  constructor(private requestService: BlockRequestService) {}

  async getBlock({ hash }: IBlockRequestParameter): Promise<string> {
    const data = await this.requestService.getBlock({ hash });
    return formatResponse<IBlockResponse>("Details about a block.", data);
  }
}
