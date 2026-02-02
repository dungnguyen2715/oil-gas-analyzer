import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { WAREHOUSE_MESSAGES } from '~/constants/messages'
import warehouseService from '~/services/warehouse.service'
import {
  CreateWareHouseReqBody,
  GetListWareHouseReqParams,
  UpdateWareHouseReqBody
} from '~/models/requests/Warehouse.requests'

export const creatWarehouseController = async (req: Request<any, any, CreateWareHouseReqBody>, res: Response) => {
  const result = await warehouseService.createWarehouse(req.body)
  return res.status(HTTP_STATUS.CREATED).json({
    message: WAREHOUSE_MESSAGES.CREATE_WAREHOUSE_SUCCESS,
    result
  })
}

export const getListWarehouseController = async (
  req: Request<ParamsDictionary, any, GetListWareHouseReqParams>,
  res: Response
) => {
  const result = await warehouseService.getListWarehouses(req.query)

  if (result.warehouses.length === 0) {
    return res.status(HTTP_STATUS.OK).json({
      message: WAREHOUSE_MESSAGES.NO_DATA,
      result: {
        warehouses: [],

        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          total_pages: result.total_pages
        }
      }
    })
  }

  return res.json({
    message: WAREHOUSE_MESSAGES.GET_LIST_WAREHOUSE_SUCCESS,
    result: {
      warehouses: result.warehouses,
      pagination: {
        total: result.total,
        page: result.page,
        limit: result.limit,
        total_pages: result.total_pages
      }
    }
  })
}

export const getWarehouseByIdController = async (req: Request<ParamsDictionary>, res: Response) => {
  const { id } = req.params
  const item = await warehouseService.getWarehouseById(id as string)
  return res.json({
    message: WAREHOUSE_MESSAGES.GET_WAREHOUSE_SUCCESS,
    result: item
  })
}

export const updateWarehouseController = async (
  req: Request<ParamsDictionary, any, UpdateWareHouseReqBody>,
  res: Response
) => {
  const { id } = req.params
  const result = await warehouseService.updateWarehouse(id as string, req.body)

  return res.status(HTTP_STATUS.OK).json({
    message: WAREHOUSE_MESSAGES.UPDATE_WAREHOUSE_SUCCESS,
    result
  })
}
