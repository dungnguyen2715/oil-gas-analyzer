import { Request, Response } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { INSTRUMENT_MESSAGES } from '~/constants/messages'
import {
  CreateInstrumentReqBody,
  UpdateInstrumentReqBody,
  GetListInstrumentReqQuery
} from '~/models/requests/Instrument.request'
import instrumentService from '~/services/instrument.service'

export const createInstrumentController = async (req: Request<any, any, CreateInstrumentReqBody>, res: Response) => {
  const result = await instrumentService.createInstrument(req.body)
  return res.status(HTTP_STATUS.CREATED).json({
    message: INSTRUMENT_MESSAGES.CREATE_INSTRUMENT_SUCCESS,
    result
  })
}

export const updateInstrumentController = async (
  req: Request<{ id: string }, any, UpdateInstrumentReqBody>,
  res: Response
) => {
  const { id } = req.params
  const result = await instrumentService.updateInstrument(id, req.body)
  return res.status(HTTP_STATUS.OK).json({
    message: INSTRUMENT_MESSAGES.UPDATE_INSTRUMENT_SUCCESS,
    result
  })
}

export const getInstrumentByIdController = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  const result = await instrumentService.getInstrumentById(id)
  return res.status(HTTP_STATUS.OK).json({
    message: INSTRUMENT_MESSAGES.GET_INSTRUMENT_SUCCESS,
    result
  })
}

export const getListInstrumentsController = async (
  req: Request<any, any, any, GetListInstrumentReqQuery>,
  res: Response
) => {
  const result = await instrumentService.getListInstruments(req.query)

  const message =
    result.instruments.length === 0 ? INSTRUMENT_MESSAGES.NO_DATA : INSTRUMENT_MESSAGES.GET_INSTRUMENT_SUCCESS

  return res.status(HTTP_STATUS.OK).json({
    message,
    result
  })
}

export const deleteInstrumentController = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params
  await instrumentService.deleteInstrument(id)
  return res.status(HTTP_STATUS.OK).json({
    message: INSTRUMENT_MESSAGES.DELETE_INSTRUMENT_SUCCESS
  })
}
