import { Schema, model, ObjectId } from 'mongoose'
import { AssignmentRoleType } from '~/constants/enum'

export interface IInstrumentAssignment {
  instrument_id: ObjectId
  engineer_id: ObjectId
  assignment_role: AssignmentRoleType
  assigned_by: ObjectId
  created_at: Date
}

const InstrumentAssignmentSchema = new Schema<IInstrumentAssignment>({
  instrument_id: { type: Schema.Types.ObjectId, ref: 'Instruments', required: true },
  engineer_id: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  assignment_role: { type: String, enum: AssignmentRoleType, required: true },
  assigned_by: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  created_at: { type: Date, default: Date.now }
})

export const InstrumentAssignmentModel = model('InstrumentAssignments', InstrumentAssignmentSchema)
