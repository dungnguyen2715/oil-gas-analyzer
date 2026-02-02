export const USER_MESSAGES = {
  VALIDATION_ERROR: 'Lỗi xác thực dữ liệu',
  NAME_IS_REQUIRED: 'Họ tên không được để trống',
  NAME_MUST_BE_A_STRING: 'Họ tên phải là chuỗi ký tự',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Họ tên phải từ 1 đến 100 ký tự',
  EMAIL_IS_REQUIRED: 'Email không được để trống',
  EMAIL_IS_INVALID: 'Email không đúng định dạng',
  EMAIL_ALREADY_EXISTS: 'Email đã tồn tại, vui lòng sử dụng email khác',
  PASSWORD_IS_REQUIRED: 'Mật khẩu không được để trống',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Mật khẩu phải từ 6 đến 50 ký tự',
  PASSWORD_MUST_BE_STRONG: 'Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
  PHONE_NUMBER_IS_INVALID: 'Số điện thoại không đúng định dạng Việt Nam',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Mật khẩu nhập lại không khớp',
  USER_NOT_FOUND: 'Người dùng không tồn tại',

  CREATE_USER_SUCCESS: 'Thêm người dùng thành công'
} as const

export const ROLE_MESSAGES = {
  VALIDATION_ERROR: 'Lỗi xác thực dữ liệu',
  NAME_IS_REQUIRED: 'Tên vai trò không được để trống',
  NAME_MUST_BE_A_STRING: 'Tên vai trò phải là chuỗi ký tự',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Tên vai trò phải từ 1 đến 100 ký tự',
  DESCRIPTION_IS_REQUIRED: 'Mô tả không được để trống',
  DESCRIPTION_MUST_BE_A_STRING: 'Mô tả phải là chuỗi ký tự',
  PERMISSIONS_IS_REQUIRED: 'Danh sách quyền không được để trống',
  PERMISSIONS_MUST_BE_AN_ARRAY: 'Danh sách quyền phải là mảng',
  PERMISSIONS_MUST_NOT_BE_EMPTY: 'Danh sách quyền không được rỗng',
  PERMISSIONS_MUST_BE_ARRAY_OF_STRINGS: 'Danh sách quyền phải là mảng chuỗi ObjectId hợp lệ',
  ROLE_ID_IS_INVALID: 'ID vai trò không hợp lệ',
  ROLE_NAME_IS_INVALID: 'Tên vai trò không hợp lệ',
  ROLE_NOT_FOUND: 'Vai trò không tồn tại',
  ROLE_ALREADY_EXISTS: 'Tên vai trò đã tồn tại',
  CREATE_ROLE_SUCCESS: 'Tạo vai trò thành công',
  UPDATE_ROLE_SUCCESS: 'Cập nhật vai trò thành công',
  DELETE_ROLE_SUCCESS: 'Xóa vai trò thành công',
  GET_ROLE_SUCCESS: 'Lấy thông tin vai trò thành công',
  GET_ALL_ROLES_SUCCESS: 'Lấy danh sách vai trò thành công'
} as const
