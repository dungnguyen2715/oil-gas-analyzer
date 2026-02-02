import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { WAREHOUSE_MESSAGES } from '~/constants/messages'
import { CreateWareHouseReqBody, GetListWareHouseReqParams } from '~/models/requests/WareHouse.request'
import warehouseService from '~/services/wareHouse.service'
import { GetListUserReqParams } from '~/models/requests/Users.requests'

export const creatWarehouseController = async (req: Request<any, any, CreateWareHouseReqBody>, res: Response) => {
  const result = await warehouseService.createWarehouse(req.body)
  return res.status(HTTP_STATUS.CREATED).json({
    message: WAREHOUSE_MESSAGES.CREATE_WAREHOUSE_SUCCESS,
    result
  })
}

// export const getAllWarehousesController = async (
//   req: Request<ParamsDictionary, any, GetListWareHouseReqParams>,
//   res: Response
// ) => {
//   const result = await warehouseService.getAllWarehouses()

//   if (result.length === 0) {
//     return res.status(HTTP_STATUS.OK).json({
//       message: WAREHOUSE_MESSAGES.NO_DATA,
//       result: {
//         warehouses: [],
//         pagination: {
//           total: result.total,
//           page: result.page,
//           limit: result.limit,
//           total_pages: result.total_pages
//         }
//       }
//     })
//   }
// }
