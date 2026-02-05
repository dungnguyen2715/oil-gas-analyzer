export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}
export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}

export enum UserStatus {
  Active = 'Active',
  Delete = 'Deleted',
  Banned = 'Banned'
}

export enum EquipmentType {
  Pump = 'Pump',
  Valve = 'Valve',
  Compressor = 'Compressor',
  Sensor = 'Sensor'
}

export enum EquipmentStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  UnderMaintenance = 'UnderMaintenance',
  Deleted = 'Deleted'
}

export enum AssignedLocation {
  Well = 'Well',
  Pipeline = 'Pipeline',
  Warehouse = 'Warehouse',
  Platform = 'Platform'
}
export enum WareHouseStatus {
  Active,
  Inactive
}

export enum Role {
  Admin = 'Admin',
  Supervisor = 'Supervisor',
  Engineer = 'Engineer'
}

export enum AssignmentRoleType {
  Primary = 'Primary',
  Support = 'Support'
}
