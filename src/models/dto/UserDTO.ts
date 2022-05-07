export interface BaseUserDTO {
    email: string
}

export interface UserDTO extends BaseUserDTO {
    id: Number
}

export interface CreateUserDTO extends BaseUserDTO {
    password: string
}

export type UpdateUserDTO = Partial<CreateUserDTO>

export interface LoginUserDTO extends UserDTO {
    password: string
}

export interface UserTokenPayload{
    sub: number
    email: string
    exp: number
    iat: number
}