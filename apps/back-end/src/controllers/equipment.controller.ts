import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { EQUIPMENT_MESSAGES } from '~/constants/messages'
import { CreateEquipmentReqBody, UpdateEquipmentReqBody } from '~/models/requests/Equipment.request'
import equipmentService from '~/services/equipment.service'

export const createEquipmentController = async (req: Request<any, any, CreateEquipmentReqBody>, res: Response) => {
  const result = await equipmentService.createEquipment(req.body)
  return res.status(HTTP_STATUS.CREATED).json({
    message: EQUIPMENT_MESSAGES.CREATE_EQUIPMENT_SUCCESS,
    result
  })
}

export const updateEquipmentController = async (
  req: Request<{ id: string }, any, UpdateEquipmentReqBody>,
  res: Response
) => {
  const { id } = req.params
  const result = await equipmentService.updateEquipment(id, req.body)
  return res.status(HTTP_STATUS.OK).json({
    message: EQUIPMENT_MESSAGES.UPDATE_EQUIPMENT_SUCCESS,
    result
  })
}

export const deleteEquipmentController = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  await equipmentService.deleteEquipment(id)
  return res.status(HTTP_STATUS.OK).json({
    message: EQUIPMENT_MESSAGES.DELETE_EQUIPMENT_SUCCESS
  })
}

export const getEquipmentDetailController = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  const result = await equipmentService.getEquipmentById(id)

  if (!result) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({
      message: EQUIPMENT_MESSAGES.EQUIPMENT_NOT_FOUND
    })
  }

  return res.status(HTTP_STATUS.OK).json({
    message: EQUIPMENT_MESSAGES.GET_EQUIPMENT_SUCCESS,
    result
  })
}

export const getListEquipmentController = async (req: Request, res: Response) => {
  const result = await equipmentService.getListEquipment(req.query)

  if (result.equipments.length === 0) {
    return res.status(HTTP_STATUS.OK).json({
      message: EQUIPMENT_MESSAGES.NO_EQUIPMENT_FOUND,
      result: {
        equipments: [],
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          total_pages: result.total_pages
        }
      }
    })
  }

  return res.status(HTTP_STATUS.OK).json({
    message: EQUIPMENT_MESSAGES.GET_ALL_EQUIPMENTS_SUCCESS,
    result: {
      equipments: result.equipments,
      pagination: {
        total: result.total,
        page: result.page,
        limit: result.limit,
        total_pages: result.total_pages
      }
    }
  })
}
